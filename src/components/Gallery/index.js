import React from 'react';
import "./style.css"

function GalleryImage({ project }) {

  const { name } = project;

  return (
    <div className="project" key={name}>
        <h2>Gallery</h2>
      <img
        src={require(`../../assets/gallery/${name}.jpg`)}
        alt="Galley of nails"
        className="project-bg"
      />
    </div>
  );
}

export default GalleryImage;