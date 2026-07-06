import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ai, EMBEDDING_MODEL } from "../lib/gemini-client";

const KB_DIR = path.join(process.cwd(), "content/kb");
const OUTPUT = path.join(process.cwd(), "lib/vectors.json");

type Chunk = { id: string; text: string; source: string };

function walk(dir: string): string[] {
    let files: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) files = files.concat(walk(full));
        else if (entry.name.endsWith(".md")) files.push(full);
    }
    return files;
}

function chunkMarkdown(content: string, source: string): Chunk[] {
    const sections = content.split(/^## /m).map((s) => s.trim()).filter((s) => s.length > 0);
    return sections.map((section, i) => ({
        id: `${source}#${i}`,
        text: section,
        source,
    }));
}

async function main() {
    const files = walk(KB_DIR);
    const chunks: Chunk[] = [];

    for (const file of files) {
        const raw = fs.readFileSync(file, "utf-8");
        const { content } = matter(raw);
        const relSource = path.relative(KB_DIR, file);
        chunks.push(...chunkMarkdown(content, relSource));
    }

    const vectors = [];
    for (const chunk of chunks) {
        if (!chunk.text.trim()) continue;
        const res = await ai.models.embedContent({
            model: EMBEDDING_MODEL,
            contents: chunk.text,
        });
        const values = res.embeddings?.[0]?.values;
        if (!values) throw new Error(`No embedding returned for ${chunk.id}`);

        vectors.push({
            id: chunk.id,
            text: chunk.text,
            source: chunk.source,
            embedding: values,
        });
        console.log(`Embedded ${chunk.id}`);
    }

    fs.writeFileSync(OUTPUT, JSON.stringify(vectors, null, 2));
    console.log(`Wrote ${vectors.length} vectors to ${OUTPUT}`);
}

main();