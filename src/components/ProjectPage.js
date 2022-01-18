import React from "react";

const ProjectPage = () => {
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
                data.ProjectDescription +
                " ," +
                data.TechUsed}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PastWork;
export default ProjectPage;
