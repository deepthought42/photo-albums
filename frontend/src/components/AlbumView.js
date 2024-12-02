import React, { useEffect, useState } from "react";

function AlbumView({ match }) {
  const [photos, setPhotos] = useState([]);
  const albumId = match.params.id;

  useEffect(() => {
    // Fetch photos from backend
    fetch(`/api/albums/${albumId}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  }, [albumId]);

  return (
    <div>
      <h1>Album Photos</h1>
      <div>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.name} style={{ width: "100px" }} />
        ))}
      </div>
      <input type="file" />
      <button>Upload Photo</button>
    </div>
  );
}

export default AlbumView;