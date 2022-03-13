import React, { useState } from 'react';
import GalleryImage from "./index";

function Gallery() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: `nail1`,
    },
    {
      name: 'nail2',
    },
    {
      name: 'nail3',
    },
    {
      name: 'nail4',
    },
    {
      name: 'nail5',
    },
  ]);

  return (
    <div>
      <div>
        {projects.map((project, idx) => (
          <GalleryImage
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;