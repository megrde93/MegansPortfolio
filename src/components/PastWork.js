import React from "react";
import { projects } from "../projects";

const PastWork = () => {
  return (
    <>
      <div>
        <h1>Projects</h1>
        {projects.map((data, key) => {
          return (
            <div key={key}>
              {data.ProjectName +
                " , " +
                data.image +
                " ," +
                data.ProjectDescription}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PastWork;
