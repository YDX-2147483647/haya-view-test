import { useState } from "react";
import { asTitle, CARGO_LOG_PLACEHOLDER, parseCargoLog } from "./cargo.ts";
import DiffResult from "./DiffResult.tsx";
import exampleCargoLog from "./fixtures/cargo-test.log?raw";
import { tracking } from "./tracking_issue.ts";

// git log -1 --format='%h %ad' --date=iso-strict
const MAIN_BRANCH_INFO = "a137441 2025-12-27T22:30:59Z";

function App() {
  const [cargoLog, setCargoLog] = useState("");
  const results = parseCargoLog(cargoLog || exampleCargoLog);

  return (
    <main className="prose mx-auto px-4 pt-8">
      <h1 className="text-center">haya-view-test</h1>
      <pre>
        <code>
          {
            "cargo test --features csl-json test_parse_tests -- --no-capture 2> cargo-test.log"
          }
        </code>
      </pre>
      <p>
        Run the above command in your <code>typst/hayagriva</code> repo, and
        paste <code>cargo-test.log</code> below.
      </p>
      <textarea
        className="w-full h-24 p-2 border border-gray-300 rounded"
        placeholder={CARGO_LOG_PLACEHOLDER}
        value={cargoLog}
        onChange={(e) => {
          setCargoLog(e.target.value);
        }}
      />
      {results.length === 0 && (
        <p>
          <span className="text-red-600">
            <strong>Error:</strong> Failed to extract test results from your{" "}
            <code className="text-red-700">cargo-test.log</code>.
          </span>
          <br />
          <strong className="text-blue-500">Hint:</strong> Did you pass{" "}
          <code>{"-- --no-capture"}</code> to cargo? If not, cargo will capture
          stdout/stderr of the test. You have to use{" "}
          <code>{"--no-capture"}</code> to let cargo print them directly.
        </p>
      )}

      {!cargoLog && (
        <p>
          <strong className="text-blue-500">Note:</strong> No{" "}
          <code>cargo-test.log</code> provided. Test results for main (
          {MAIN_BRANCH_INFO.replace(/T.+$/, "").replace(" ", ", ")}) will be
          shown.
        </p>
      )}
      {results.length > 0 && (
        <>
          <h2>Test results</h2>
          <p>
            The comments are copied from{" "}
            <a
              href="https://github.com/typst/hayagriva/issues/327"
              target="_blank"
            >
              Tracking Issue: CSL Spec Compliance · Issue #327 · typst/hayagriva
            </a>{" "}
            as of {tracking.updatedAt.toLocaleString()}.
          </p>
          <p
            // Extend the background color to cover long titles in results.
            className="sticky top-0 py-4 -mt-4 -mb-2 -mx-4 px-4"
            style={{ backgroundColor: "var(--bg-color)" }}
          >
            <strong>Notation:</strong> <del className="bg-red-200">got</del> vs.{" "}
            <ins className="bg-green-200">expected</ins>.
          </p>
          <ul className="pl-0">
            {results.map((result) => (
              <li key={result.path} className="list-none">
                <DiffResult
                  result={result}
                  comment={tracking.notes.get(asTitle(result.path)) ?? null}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
