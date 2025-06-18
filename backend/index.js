const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

// 🔥 Endpoint baru: ambil data post dari API publik
app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(response.data); // Kirimkan data ke client
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

const PORT = 5000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
