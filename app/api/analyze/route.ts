import { NextRequest, NextResponse } from "next/server";
import { analyzeCompany } from "../../../services/gemini";
import { getCompanyData } from "../../../services/finance";
import { getCompanyNews } from "../../../services/news";

export async function POST(req: NextRequest) {
  try {
    const { company } = await req.json();

    if (!company) {
      return NextResponse.json(
        {
          error: "Company name is required.",
        },
        {
          status: 400,
        }
      );
    }

    // Real-time Finance
    const finance = await getCompanyData(company);

    if (!finance) {
      return NextResponse.json(
        {
          error:
            "Company not found. Please enter a valid stock symbol (Example: TSLA, MSFT, AAPL, NVDA, INFY).",
        },
        {
          status: 404,
        }
      );
    }

    // Latest News
    const news = await getCompanyNews(company);

    // Gemini Analysis
    const analysis = await analyzeCompany(`
Financial Data:
${JSON.stringify(finance, null, 2)}

Latest News:
${JSON.stringify(news, null, 2)}
`);

    let parsed;

    try {
      parsed = JSON.parse(analysis);
    } catch {
      return NextResponse.json(
        {
          error: "Gemini returned an invalid response.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      finance,
      analysis: parsed,
      news,
    });

  } catch (error: any) {
    console.error(error);

    if (
      error.message?.includes("429") ||
      error.status === 429
    ) {
      return NextResponse.json(
        {
          error:
            "Gemini API quota exceeded. Please wait a few seconds and try again.",
        },
        {
          status: 429,
        }
      );
    }

    return NextResponse.json(
      {
        error:
          "Unable to analyze the company right now. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}