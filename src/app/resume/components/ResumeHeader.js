import React from "react";
import Image from "next/image";

function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="heading-logo border-l-indigo-950">
        <Image
          src="/desert.jpg"
          className="desert"
          width={100}
          height={50}
          alt="logo-desert"
        />
      </div>
      <div className="name-title">
        <p className="font-medium">
          <h2 className="resume-name">Mohamed Jalloh</h2>
          <h4 className="resume-title text-slate-500">Front-End Developer</h4>
        </p>
      </div>
    </header>
  );
}

export default ResumeHeader;
