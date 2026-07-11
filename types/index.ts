export interface FinanceData {
  company: string;
  symbol: string;
  price: number;
  marketCap: number;
  peRatio: number;
  currency: string;
  history: {
    date: string;
    close: number;
  }[];
}

export interface NewsArticle {
  title: string;
  url: string;
  source: string;
}

export interface AnalysisResult {
  company: string;
  decision: "INVEST" | "PASS";
  confidence: number;
  summary: string;
  pros: string[];
  cons: string[];
}

export interface ResultData {
  finance: FinanceData;
  analysis: AnalysisResult;
  news: NewsArticle[];
}