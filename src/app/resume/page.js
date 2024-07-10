import React from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeExp from "./components/ResumeExp";
import ResumeSkills from "./components/ResumeSkills";
import ResumeProjects from "./components/ResumeProjects";
import ResumeCerts from "./components/ResumeCerts";

function page() {
  return (
    <div className="outer-wrapper w-full">
      <div className="resume-wrapper max-w-screen-lg flex flex-col justify-center m-auto p-2">
        <ResumeHeader />
        <ResumeExp />
        <ResumeSkills />
        <ResumeProjects />
        <ResumeCerts />
      </div>
    </div>
  );
}

export default page;
