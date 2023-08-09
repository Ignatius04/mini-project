import React, { useState, useEffect } from "react";
import "../assets/Landing.css";
import CourseContainer from "../components/CourseContainer.js";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containers = [
    {
      id: 1,
      imgUrl: image1,
      link: "https://example.com/link1",
    },
    {
      id: 2,
      imgUrl: image2,
      link: "https://example.com/link2",
    },
    {
      id: 3,
      imgUrl: image3,
      link: "https://example.com/link3",
    },
    {
      id: 4,
      imgUrl: image4,
      link: "https://example.com/link4",
    },
    {
      id: 5,
      imgUrl: image5,
      link: "https://example.com/link5",
    },
  ];

  const moreContainers = [
    {
      id: 6,
      imgUrl: image6,
      link: "https://example.com/link6",
    },
    {
      id: 7,
      imgUrl: image7,
      link: "https://example.com/link7",
    },
    {
      id: 8,
      imgUrl: image8,
      link: "https://example.com/link8",
    },
    {
      id: 9,
      imgUrl: image9,
      link: "https://example.com/link9",
    },
    {
      id: 10,
      imgUrl: image10,
      link: "https://example.com/link10",
    },
  ];

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
  };

  useEffect(() => {
    // Set interval to change the image every 5 seconds
    const interval = setInterval(changeImage, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleContainerClick = () => {
    changeImage();
  };

  return (
    <div>
      <header className="header">
        <h1>E-Learning</h1>
        <div className="header-buttons">
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </header>

      <div className="container" onClick={handleContainerClick}>
        <div className="content">
          <img
            src={containers[currentIndex].imgUrl}
            alt={`Image ${containers[currentIndex].id}`}
          />
        </div>
        <div className="radio-buttons">
          {containers.map((item, index) => (
            <input
              key={item.id}
              type="radio"
              name="image-radio"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <h1 className="title">Courses Offered</h1>

      <div className="course-grid">
        {moreContainers.map((item) => (
          <CourseContainer
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            link={item.link}
          />
        ))}
      </div>

      <div className="link-button-container">
        <a href="YOUR_LINK_HERE" className="link-button">
          Link Button
        </a>
      </div>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Landing;
