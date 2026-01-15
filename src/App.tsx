import { asTitle, CARGO_LOG_PLACEHOLDER, parseCargoLog } from "./cargo.ts";
import DiffResult from "./DiffResult.tsx";
import exampleCargoLog from "./fixtures/cargo-test.log?raw";
import { tracking } from "./tracking_issue.ts";
import { useLocalStorage } from "./util.ts";

// git log -1 --format='%h %ad' --date=iso-strict
const MAIN_BRANCH_INFO = "a137441 2025-12-27T22:30:59Z";
const storage = (key: string): string => `haya-view-test:${key}`;

function App() {
  const [cargoLog, setCargoLog, _resetCargoLog] = useLocalStorage(
    storage("cargo-test.log"),
    "",
  );
  const [filter, setFilter, _resetFilter] = useLocalStorage(
    storage("filter"),
    "",
  );
  const results = parseCargoLog(cargoLog || exampleCargoLog);
  const filteredResults = results.filter((result) =>
    asTitle(result.path).toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <main className="prose dark:prose-invert mx-auto px-4 py-8">
      <h1 className="text-center">
        <a href="https://github.com/YDX-2147483647/haya-view-test">
          haya-view-test
        </a>
      </h1>
      <p>
        View <a href="https://github.com/typst/hayagriva">Hayagriva</a>'s result
        against the{" "}
        <a href="https://github.com/citation-style-language/test-suite">
          CSL Test Suite
        </a>
        .
      </p>{" "}
      <pre>
        <code>
          {
            "cargo test --features csl-json test_parse_tests -- --no-capture 2> cargo-test.log"
          }
        </code>
      </pre>
      <label>
        <p>
          Run the above command in your <code>hayagriva</code> repo, and paste{" "}
          <code>cargo-test.log</code> below.
        </p>
        <textarea
          className="h-24 w-full rounded border border-gray-300 p-2"
          placeholder={CARGO_LOG_PLACEHOLDER}
          value={cargoLog}
          onChange={(e) => {
            setCargoLog(e.target.value);
          }}
        />
      </label>
      {results.length === 0 && (
        <p>
          <span className="text-red-600 dark:text-red-400">
            <strong className="text-red-600 dark:text-red-400">Error:</strong>{" "}
            Failed to extract test results from your{" "}
            <code className="text-red-600 dark:text-red-400">
              cargo-test.log
            </code>
            .
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
            The comments below are copied from{" "}
            <a
              href="https://github.com/typst/hayagriva/issues/327"
              target="_blank"
              rel="noopener"
            >
              Tracking Issue: CSL Spec Compliance · Issue #327 · typst/hayagriva
            </a>{" "}
            as of {tracking.updatedAt.toLocaleString()}.
          </p>
          <label>
            Filter by test name:
            <input
              type="text"
              placeholder="number_ / quote / …"
              className="w-full rounded border border-gray-300 p-2 text-sm"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
          </label>
          <p
            // Extend the background color to cover long titles in results.
            className="sticky top-0 -mx-4 -mb-2 px-4 py-4"
            style={{ backgroundColor: "var(--bg-color)" }}
          >
            <strong>Notation:</strong> <del>got</del> vs. <ins>expected</ins>.
          </p>
          <ul className="pl-0">
            {filteredResults.map((result) => (
              <li key={result.path} className="list-none">
                <DiffResult
                  result={result}
                  comment={tracking.notes.get(asTitle(result.path)) ?? null}
                />
              </li>
            ))}
          </ul>
          {/* Makes the position of the search bar more stable. */}
          {filteredResults.length < 10 && (
            <div aria-hidden style={{ height: "60vh" }} />
          )}
        </>
      )}
    </main>
  );
}

export default App;
