import React from "react";
import { Link } from "react-router-dom";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <div>
      <h2>
        I am a web developer who prioritizes beautiful, functional design.
      </h2>
      <div>
        <h2>
          My specialties are front-end responsive design. I also work with work
          with squarespace. I am happy to work with you on designing your
          website.
        </h2>
      </div>
      <Link to={Contact}>
        <button> Contact Me</button>
      </Link>
    </div>
  );
};

export default HomePage;
