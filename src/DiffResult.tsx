import { diffWordsWithSpace } from "diff";
import type { JSX } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGithub, {
  type Options as remarkGithubOptions,
} from "remark-github";
import { asTitle, type TestResult } from "./cargo.ts";

const TEST_SUITE = "target/haya-cache/test-suite/";

export default function DiffResult({
  result: { path, expected, got },
  comment,
}: {
  result: TestResult;
  comment?: string | null;
}): JSX.Element {
  const diff = diffWordsWithSpace(
    got.trim(),
    // Remove indentation from original result to match our own output,
    // which is not indented or pretty-printed. It appears that
    // citeproc test results simply indent elements with two spaces at
    // the start when the line gets too long, or for each inner bib
    // entry.
    // https://github.com/typst/hayagriva/blob/a137441413a5907c15ced44d1502dfb9fa1a3014/tests/citeproc.rs#L616-L623
    expected
      .trim()
      .replace(/\n\s*/g, ""),
  );

  const url = path.startsWith(TEST_SUITE)
    ? `https://github.com/citation-style-language/test-suite/tree/master/${path.slice(TEST_SUITE.length)}`
    : null;

  return (
    <details className="prose my-4">
      <summary className="font-bold">
        {asTitle(path)}
        {comment && <span className="font-medium"> (with comment)</span>}
      </summary>
      <p>
        Test{" "}
        {url ? (
          <a href={url} target="_blank">
            <code>{path}</code>
          </a>
        ) : (
          <code>{path}</code>
        )}{" "}
        failed.
      </p>
      {comment && (
        <blockquote>
          <ReactMarkdown
            remarkPlugins={[
              remarkGfm,
              [
                remarkGithub,
                {
                  repository: "typst/hayagriva",
                } satisfies remarkGithubOptions,
              ],
            ]}
            components={{
              a: (props) => <a {...props} target="_blank" rel="noopener" />,
            }}
          >
            {comment}
          </ReactMarkdown>
        </blockquote>
      )}
      {/* .wrap-break-word is necessary for long URL, DOI, etc. */}
      <pre className="wrap-break-word whitespace-pre-wrap">
        {diff.map((part) => {
          /* eslint-disable react-x/no-missing-key */
          if (part.added) {
            return <ins className="bg-green-200">{part.value}</ins>;
          } else if (part.removed) {
            return <del className="bg-red-200">{part.value}</del>;
          } else {
            return <span>{part.value}</span>;
          }
          /* eslint-enable react-x/no-missing-key */
        })}
      </pre>
    </details>
  );
}
