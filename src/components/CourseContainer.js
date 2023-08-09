// CourseContainer.js

import React from "react";
import "../assets/CourseContainer.css";

function CourseContainer({ id, imgUrl, link }) {
  return (
    <div className="course-container">
      <img className="course-image" src={imgUrl} alt={`Course ${id}`} />
      <a className="course-link" href={link}>
        View Course
      </a>
    </div>
  );
}

export default CourseContainer;
