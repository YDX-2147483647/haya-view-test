import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(
  document.getElementById("root")!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
