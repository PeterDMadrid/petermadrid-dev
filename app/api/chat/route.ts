import { ai, generateWithFallback } from "@/lib/gemini-client";
import { cosineSimilarity } from "@/lib/similarity";
import rawVectors from "@/lib/vectors.json";

type VectorEntry = { id: string; text: string; source: string; embedding: number[] };
const vectors = rawVectors as VectorEntry[];

const SIMILARITY_THRESHOLD = 0.55;

export async function POST(req: Request) {
    const { question } = await req.json();

    const embedRes = await ai.models.embedContent({
        model: "gemini-embedding-001",
        contents: question,
        config: { taskType: "RETRIEVAL_QUERY" },
    });
    const queryVec = embedRes.embeddings?.[0]?.values;
    if (!queryVec) {
        return Response.json({ answer: "Embedding failed, try again." }, { status: 500 });
    }

    const topChunks = vectors
        .map((v) => ({ ...v, score: cosineSimilarity(queryVec, v.embedding) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

    if (topChunks[0].score < SIMILARITY_THRESHOLD) {
        return Response.json({
            answer: "That's outside what I know about Peter — try asking about his projects, skills, or experience.",
        });
    }

    const context = topChunks.map((c) => c.text).join("\n\n---\n\n");

    const response = await generateWithFallback(`
You are Peter Madrid's AI Portfolio Assistant.

Your purpose is to help visitors learn about Peter's skills, projects, experience, and services.

Rules:
- Use ONLY the provided context when stating facts about Peter.
- Never invent information.
- If the answer is not in the context, say you don't have that information.
- If the user greets you, introduce yourself and explain what you can help with.
- If the user asks for an opinion about Peter, summarize relevant facts from the context instead of making subjective judgments.
- Be concise and professional.

Context:
${context}

Question:
${question}
`);

    return Response.json({
        answer: response.text,
        sources: topChunks.map((c) => c.source),
    });
}