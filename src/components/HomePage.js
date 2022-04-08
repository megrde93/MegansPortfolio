import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center	">Megan Deray</h1>
      <h1 className="text-2xl text-center	">
        Web Developer • IT Systems Admin • CompTIA Certified
      </h1>
      <h2 className="text-center	">
        I am a developer who prioritizes well thought out, beautiful, functional
        design.
      </h2>

      <div class="text-center">
        <h2>
          <br />
          <Link to="PastWork">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              See My Past Work
            </button>
          </Link>
        </h2>
      </div>

      <div class="text-center">
        <h2>
          My specialties are front-end responsive design. I work primarily with
          react. I am happy to work with you on designing your new website.
          Contact me for more information!
        </h2>

        <h2>
          {" "}
          Tech I work with: HTML, CSS, and JavaScript, MONGODB, AWS Cloud
        </h2>

        <Link to="Contact">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
