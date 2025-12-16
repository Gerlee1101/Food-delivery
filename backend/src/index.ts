import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("hellodfsdfsdf");
});
app.post("/", (req, res) => {});
const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
