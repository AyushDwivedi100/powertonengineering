import express from "express";
import { createViteMiddleware } from "./vite.js";

const app = express();
const PORT = parseInt(process.env.PORT || "5000");

// Use JSON middleware
app.use(express.json());

// Setup Vite middleware for development
if (process.env.NODE_ENV === "development") {
  await createViteMiddleware(app);
}

// Import and use routes
const { setupRoutes } = await import("./routes.js");
setupRoutes(app);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`[express] serving on port ${PORT}`);
});