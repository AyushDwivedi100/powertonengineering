import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global error handler to prevent unhandled promise rejections from flooding console
window.addEventListener('unhandledrejection', (event) => {
  // Log the error silently for debugging if needed, but prevent console flooding
  console.debug('Promise rejection handled gracefully:', event.reason);
  event.preventDefault(); // Prevent default error reporting
});

createRoot(document.getElementById("root")!).render(<App />);
