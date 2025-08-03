// src/service/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);

export async function generateWithGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    let output = result.response.text();

    // Remove markdown backticks and language identifiers like ```json
    output = output.trim().replace(/^```json|```$/gim, '').replace(/^```|```$/gim, '');

    // Now safely parse
    const parsed = JSON.parse(output);
    return parsed;
  } catch (error) {
    console.error("Gemini API Error or Invalid JSON:", error);
    throw error;
  }
}
