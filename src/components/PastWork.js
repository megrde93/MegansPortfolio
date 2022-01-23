import React from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";

const PastWork = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Past Projects</h1>
        <div class="grid grid-cols-2 gap-4">
          {projects.map((data) => {
            return (
              <div>
                <h1>{data.ProjectName}</h1>
                <Link to={data.ProjectName}>
                  <img src={data.image} alt="Project" />
                </Link>

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
