// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = process.env.GOOGLE_API_KEY;

// if (!apiKey) {
//   throw new Error("GOOGLE_API_KEY is missing in .env.local");
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// export async function analyzeCompany(data: string) {
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.5-flash",
//   });

//   const prompt = `
// You are a professional investment analyst.

// Analyze the following real-time financial data:

// ${data}

// Based on this data, return ONLY valid JSON in exactly this format:

// {
//   "company": "",
//   "decision": "INVEST or PASS",
//   "confidence": 90,
//   "summary": "",
//   "pros": [],
//   "cons": []
// }

// Do not include markdown.
// Do not include \`\`\`json.
// Return only the JSON object.
// `;

//   const result = await model.generateContent(prompt);

//   let text = result.response.text();

//   text = text
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();

//   return text;
// }





import { llm } from "../lib/langchain";

export async function analyzeCompany(data: string) {
  const prompt = `
You are a senior investment analyst.

Analyze the following REAL-TIME financial data and latest company news.

${data}

Return ONLY valid JSON.

{
  "company": "",
  "decision": "INVEST or PASS",
  "confidence": 90,
  "summary": "",
  "pros": [],
  "cons": []
}
`;

  const response = await llm.invoke(prompt);

  let text = response.content as string;

  text = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  return text;
}