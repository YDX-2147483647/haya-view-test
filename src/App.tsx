import DiffResult from "./DiffResult.tsx";
import cargoTestLog from "./fixtures/cargo-test.log?raw";
import trackingIssue from "./fixtures/tracking-issue.md?raw";

function App() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-4xl my-8 font-bold">haya-view-test</h1>
      <p>
        Notation: <del className="bg-red-200">got</del> vs.{" "}
        <ins className="bg-green-200">expected</ins>.
      </p>
      <DiffResult
        title="Example Diff"
        expected="This is the expected text."
        got="This is the got text."
      />
      <pre>{trackingIssue}</pre>
      <pre>{cargoTestLog}</pre>
    </main>
  );
}

export default App;
