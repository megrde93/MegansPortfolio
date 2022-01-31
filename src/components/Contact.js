import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact me!</h1>
      <Link>Email Me</Link>
      <Link to="https://www.linkedin.com/in/megan-deray/">
        Find me on LinkedIn
      </Link>
    </div>
  );
};

export default Contact;
