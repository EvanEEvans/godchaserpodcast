import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BOOK_DIR = path.join(process.cwd(), "content", "book");

export type BookChapter = {
  title?: string;
  book?: string;
  content: string;
};

export function readBookFile(filename: string): string {
  const fullPath = path.join(BOOK_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  return parsed.content;
}

export function readBookChapter(filename: string): BookChapter {
  const fullPath = path.join(BOOK_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Partial<BookChapter>;
  return {
    title: data.title,
    book: data.book,
    content: parsed.content,
  };
}

export function publicFileExists(filename: string): boolean {
  const fullPath = path.join(process.cwd(), "public", filename);
  return fs.existsSync(fullPath);
}
