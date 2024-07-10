import React from "react";
import Image from "next/image";

function ResumeHeader() {
  return (
    <header className="resume-header">
      <figure className="md:flex rounded-xl p-8 md:p-0 border-l-indigo-950">
        <Image
          src="/muslim-man.png"
          className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
          width={300}
          height={300}
          alt="muslim-man"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium ">
              “Im like a toddler when it comes to coding, i know what i desire
              but my little body prevents me from being able to do what i think
              about doing, so same with coding, i have a lot of ideas but my
              lack of knowledge prevents me from building what i think about....
              well anyway, Welcome!”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="resume-name">Mohamed Jalloh</div>
            <div className="resume-title text-slate-500">
              Front-End Developer
            </div>
          </figcaption>
        </div>
      </figure>
    </header>
  );
}

export default ResumeHeader;
