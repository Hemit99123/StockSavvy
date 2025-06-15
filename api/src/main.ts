import express, { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./utils/docs/swaggerConfig.ts";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Server configuration
const PORT = 3001;
const app: Express = express();

// Routers
import indexRoutes from "./routes/index.route.ts";
import authRoutes from "./routes/auth.route.ts";
import forumRoutes from "./routes/forum.route.ts";
import questionRoutes from "./routes/questions.route.ts";
import adminRoutes from "./routes/admin.route.ts";
import cookieParser from "cookie-parser";

// JSON middleware
app.use(express.json());

// CORS middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL as string,
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(cookieParser())

// Setup routing
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/forum", forumRoutes);
app.use("/question", questionRoutes);
app.use("/admin", adminRoutes);

// Route for api docs from Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Start server
app.listen(PORT || process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;