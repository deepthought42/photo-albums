import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  useEffect(() => {
    // Fetch albums from backend
    fetch("/api/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data.albums));
  }, []);

  const handleCreateAlbum = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/albums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newAlbumName }),
      });
      const data = await response.json();
      
      // Add new album to state and reset form
      setAlbums([...albums, data.album]);
      setNewAlbumName("");
      setShowCreateForm(false);
    } catch (error) {
      console.error("Error creating album:", error);
    }
  };

  return (
    <div>
      <h1>Your Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.name}</Link>
          </li>
        ))}
      </ul>
      
      {showCreateForm ? (
        <form onSubmit={handleCreateAlbum}>
          <input
            type="text"
            value={newAlbumName}
            onChange={(e) => setNewAlbumName(e.target.value)}
            placeholder="Enter album name"
            required
          />
          <button type="submit">Save Album</button>
          <button type="button" onClick={() => setShowCreateForm(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button onClick={() => setShowCreateForm(true)}>Create New Album</button>
      )}
    </div>
  );
}

export default Albums;
