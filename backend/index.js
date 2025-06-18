const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

app.listen(5000, "127.0.0.1", () => {
  console.log("Server is running at http://127.0.0.1:5000");
});
