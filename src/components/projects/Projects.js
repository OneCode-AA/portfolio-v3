"use client";

// import React from "react";

import React, { useState } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

function Projects() {
  const [view, setView] = useState(false);
  const [visible, isVisible] = useState(false);

  function letSee() {
    return setView(!view) || isVisible(!visible);
  }

  let viewing = view ? "viewing" : "notViewing";
  let cardInfo = "about-me";

  let iAmIt = visible ? "visible" : "nonVisible";
  let sectionContent = "content";

  if (letSee === true && setView === true) {
    cardInfo.classList("viewing");
    sectionContent.classList("NonVisible");
  }

  return (
    <section
      className={`projects card min-h-full p-4 bg-blue-600 md:w-full md:order-5 sm:w-full md:grayscale-0 sm:grayscale-0  lg:grayscale lg:hover:grayscale-0 ${viewing}`}
    >
      <article className="section-container">
        <h2 className="section-title m-auto">Projects</h2>
        <section
          className={`content projects-wrapper scroller ${iAmIt}`}
          data-speed="slow"
        >
          <article className="scroll-inner-container">
            <Image
              src="/SWE pic1.png"
              className="projects-logo"
              width={500}
              height={500}
              alt="Project-logo"
            />
            {/*             
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
            <Project5 /> */}

            {/* <section className="project-container">
          <article className="project">
            <Image
              src=""
              className="project-img"
              width={200}
              height={200}
              alt=""
            />
          </article>
          <article className="technologies">
          <Image
              src="/html.png"
              className="web-tech-used"
              width={20}
              height={20}
              alt="HTML"
            />
            <Image
              src="/css.png"
              className="web-tech-used"
              width={20}
              height={20}
              alt="CSS"
            />
            <Image
              src="/js.png"
              className="web-tech-used"
              width={20}
              height={20}
              alt="Javascript"
            />
          </article>
        </section> */}
          </article>
        </section>
      </article>
      <article className="view-projects pb-5">
        <button className="view-work btn rounded-full border-solid p-2.5 sm:p-1 sm:mt-2">
          View My Work
        </button>
      </article>
      <button className="info-btn">
        <InfoIcon onClick={letSee} className="text-5xl hover:text-sky-100" />
      </button>
    </section>
  );
}

export default Projects;
