import express from "express";
import { connectToDatabase } from "./database/index.js";
import { FoodRouter } from "./routes/food.router.js";
import { CategoryRouter } from "./routes/category.router.js";

await connectToDatabase();
const app = express();
// app.get("/", (req, res) => {
//   res.send("hi");
// });
app.use(express.json());

app.use(`/food`, FoodRouter);
app.use(`/categories`, CategoryRouter);

app.listen(4000, () => {
  console.log(`example app listening on port 4000`);
});
