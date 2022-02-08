import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import PastWork from "./PastWork";

const HomePage = () => {
  return (
    <div>
      <h1>Megan Deray</h1>
      <h1>Web Developer • IT Systems Admin • CompTIA Certified</h1>
      <h2>
        I am a web developer who prioritizes beautiful, functional design.
      </h2>
      <Link to={PastWork}>
        <button> See My Past Work</button>
      </Link>
      <div>
        <h2>
          I am currenlty working on React base projects with
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/makeitmvp/"
          >
            MakeItMVP.
          </a>
        </h2>
        <h2>
          My specialties are front-end responsive design. I also work with work
          with squarespace. I am happy to work with you on designing your new
          website. Contact me for more information.
        </h2>
      </div>
      <Link to={Contact}>
        <button> Contact Me</button>
      </Link>
    </div>
  );
};

export default HomePage;
