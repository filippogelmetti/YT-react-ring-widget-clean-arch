import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/presentation/App.tsx";
import "@/presentation/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
