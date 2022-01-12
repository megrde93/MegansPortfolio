import React from "react";
import data from "../projects.json";

const PastWork = data.map((item) => (
  <div>
    <a href={item.url}>
      <p className="text-3xl font-bold underline">{item.ProjectName}</p>
      <p>{item.ProjectDescription}</p>
      <img src={item.image} alt="Project" />
    </a>
  </div>
));

export default PastWork;
