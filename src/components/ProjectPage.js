import React from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <>
      <div>
        <h1>Projects</h1>
        {projects.map((data) => {
          return (
            <div>
              <h1>{data.ProjectName}</h1>
              <Link href={data.ProjectLink}>
                <img src={data.image} alt="Project" />
              </Link>
              <h2> {data.Date} </h2>
              <h2> {data.TechUsed} </h2>
              <h2> {data.ProjectDescription} </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectPage;
