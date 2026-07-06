import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({});

export const EMBEDDING_MODEL = "gemini-embedding-001";
export const CHAT_MODEL = "gemini-3.5-flash";