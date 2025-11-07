require("dotenv").config();
import express, { Express, Request, NextFunction, Response } from "express";
import path from "path";
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import { testDBConnection } from './config/database';

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Serve static files
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 404 handler
app.use((request: Request, response: Response, next: NextFunction) => {
  response
    .status(404)
    .json({ success: false, message: "Not found this route does not exist" });
});

// Test database connection and start server
testDBConnection().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

export default app;
