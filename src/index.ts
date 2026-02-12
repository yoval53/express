import express from "express";
import { requestLogger } from "./middleware/logger.js";
import rootRouter from "./routes/root.js";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import healthRoutes from "./routes/health.js";
import authRoutes from "./routes/auth.js";

export const app = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(requestLogger);

app.use(rootRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use(healthRoutes);
app.use(authRoutes);

export default app;
