import React from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";

const PastWork = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Projects</h1>
        <div class="grid grid-cols-2 gap-4">
          {projects.map((data, key) => {
            return (
              <div>
                <h1>{data.ProjectName}</h1>
                <img src={data.image} alt="Project" />
                <h2> {data.ProjectDescription} </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PastWork;
