import express from "express";
import { connectToDatabase } from "./database/index.js";

await connectToDatabase;
const app = express();
app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(4000, () => {
  console.log(`example app listening on port 4000`);
});
