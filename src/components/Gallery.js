import React from 'react';
import '../styles/index.css';

function Gallery(props) {
  return (
    <div className="gallery">
      {props.images.map((image) => (
        <img className="gallery-img" src={image} alt="poster" key={image} />
      ))}
    </div>
  );
}

export default Gallery;
