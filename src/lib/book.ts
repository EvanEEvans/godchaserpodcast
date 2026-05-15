import fs from "node:fs";
import path from "node:path";

const BOOK_DIR = path.join(process.cwd(), "content", "book");

export function readBookFile(filename: string): string {
  const fullPath = path.join(BOOK_DIR, filename);
  return fs.readFileSync(fullPath, "utf8");
}
