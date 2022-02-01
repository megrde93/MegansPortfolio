import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact me!</h1>
      <h2>Have questions? Or just want to chat about my work?</h2>
      <Link
        to={{ pathname: "https://linkedin.com/in/megan-deray" }}
        target="_blank"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Contact;
