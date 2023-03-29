import { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './ImageCard.jsx'

const API_URL = 'https://images-api.nasa.gov/search'

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchImages = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}&media_type=image`);
    const data = await response.json();
    setImages(data.collection.items);
  }

  useEffect(() => {
    searchImages('Galaxy');
  }, []);

  return (
    <div className="app">
      <div className="title-container">
        <h1>NASA Image Search</h1>
        <h2>Discover the wonders of the universe through NASA's media library.</h2>
        <div className="search">
          <input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchImages(searchTerm);
              }
            }}
          />
        </div>
      </div>

      {images?.length > 0
        ? (
          <div className="container">
            {images.map((image) => <ImageCard image={image} />)}
          </div>
        ) : (
          <div className="empty">
            <h2>No images found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
