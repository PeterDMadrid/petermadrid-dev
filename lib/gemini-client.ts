import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({});

export const EMBEDDING_MODEL = "gemini-embedding-001";
export const CHAT_MODELS = ["gemini-3.1-flash-lite", "gemini-3.5-flash"];

export async function generateWithFallback(contents: string) {
    for (const model of CHAT_MODELS) {
        try {
            return await ai.models.generateContent({ model, contents });
        } catch (err: any) {
            if (err?.status === 429) continue;
            throw err;
        }
    }
    throw new Error("All models exhausted quota");
}
