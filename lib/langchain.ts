import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export function getLLM() {
  return new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    temperature: 0.3,
  });
}