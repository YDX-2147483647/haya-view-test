import { extractYaml } from "@std/front-matter";
import trackingIssueMarkdown from "./fixtures/tracking-issue.md?raw";

/** A map from title to comment. */
export type TestNotes = Map<string, string>;

const {
  body,
  attrs: { updatedAt },
} = extractYaml<{ updatedAt: Date }>(trackingIssueMarkdown);

function getTestNotes(body: string): TestNotes {
  const notes: TestNotes = new Map();

  const saveNote = (title: string, comment: string) => {
    if (comment.trim()) {
      // Only save if there's a comment
      if (notes.has(title)) {
        throw new Error(`Duplicate test note for ${title}`);
      }
      notes.set(title, comment.trim());
    }
  };

  let current: { title: string; comment: string } | null = null;

  const lines = body.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("- [") && trimmed.includes("] ")) {
      // New item
      if (current) {
        saveNote(current.title, current.comment);
      }

      const match = /^- \[( |x)\] (.+)$/.exec(trimmed);
      if (match) {
        current = {
          title: match[2].trim(),
          comment: "",
        };
      }
    } else if (current && trimmed.startsWith("- ")) {
      // Comment line
      current.comment = current.comment + trimmed.substring(2) + "\n";
    }
  }
  if (current) {
    saveNote(current.title, current.comment);
  }

  return notes;
}

export const tracking = { updatedAt, notes: getTestNotes(body) };
