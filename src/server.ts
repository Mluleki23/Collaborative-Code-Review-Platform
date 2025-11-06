require("dotenv").config();
import { error } from "console";
import express, { Express, Request, NextFunction, Response } from "express";
import path, { dirname } from "path";
import { request } from "http";
const app: Express = express();
app.use(express.json());
//serve static ac
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.use((request: Request, response: Response, next: NextFunction) => {
  response
    .status(404)
    .json({ success: false, message: "Not found this route does not exist" });
});
app.listen(process.env.PORT, () => {
  console.log(`Application is running on http://localhost:${process.env.PORT}`);
});
export default app;
