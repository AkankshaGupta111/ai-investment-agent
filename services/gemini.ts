import { getLLM } from "../lib/langchain";

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

  const llm = getLLM();
const response = await llm.invoke(prompt);

  let text = response.content as string;

  text = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  return text;
}