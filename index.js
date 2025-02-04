import { useState } from "react";
import axios from "axios";
import AIResults from "../components/AIResults";

export default function Home() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [generatedCovers, setGeneratedCovers] = useState([]);

  const handleGenerate = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/generate-cover", {
      title,
      genre,
    });
    setGeneratedCovers(response.data.images);
  };

  return (
    <div>
      <h1>AI Book Cover Generator</h1>
      <form onSubmit={handleGenerate}>
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <button type="submit">Generate Cover</button>
      </form>

      <AIResults covers={generatedCovers} />
    </div>
  );
}
