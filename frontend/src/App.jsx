import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Failed to connect to API"));
  }, []);

  return (
    <div className="App">
      <h1>React + Express</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
