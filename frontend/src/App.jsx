import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Ambil pesan hello
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Failed to connect to /api/hello"));

    // Ambil data posts dari API publik via backend Express
    fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) // tampilkan 5 teratas
      .catch((err) => console.error("Failed to load posts", err));
  }, []);

  return (
    <div className="App">
      <h1>React + Express</h1>
      <p>{message}</p>

      <h2>Posts:</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default App;
