import type { JSX } from "react";
import { diffWordsWithSpace } from "diff";

export default function DiffResult({
  title,
  expected,
  got,
}: {
  title: string;
  expected: string;
  got: string;
}): JSX.Element {
  // Increase the spacing because we will set .whitespace-pre-wrap
  const diff = diffWordsWithSpace(
    got.trim().replaceAll("\n", "\n\n"),
    expected.trim().replaceAll("\n", "\n\n"),
  );

  return (
    <details className="pb-8">
      <summary className="font-bold">{title}</summary>
      {/* .wrap-break-word is necessary for long URL, DOI, etc. */}
      <pre className="prose wrap-break-word whitespace-pre-wrap">
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
