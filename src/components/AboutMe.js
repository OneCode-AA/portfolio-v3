"use client";
import InfoIcon from "@mui/icons-material/Info";

import React, { useState } from "react";

function AboutMe() {
  const [view, setView] = useState(false);
  const [visible, isVisible] = useState(false);

  function letSee() {
    return setView(!view) || isVisible(!visible);
  }

  let viewing = view ? "viewing" : "notViewing";
  let cardInfo = "about-me";

  let iAmIt = visible ? "visible" : "nonVisible";
  let sectionContent = "section-text";

  if (letSee === true && setView === true) {
    cardInfo.classList("viewing");
    sectionContent.classList("NonVisible");
  }

  return (
    <section
      className={`about-me card min-h-full  p-4  bg-cyan-500 md:order-3 md:w-full sm:w-full md:grayscale-0 sm:grayscale-0 lg:grayscale lg:hover:grayscale-0 ${viewing} `}
    >
      <article className="article-container flex flex-col space-between align-center ">
        <h2 className="section-title text-center ">About</h2>
        <section
          className={` content flex flex-col h-full space-evenly align-center ${iAmIt}`}
        >
          <p className={`section-text text-xl blur-sm hover:blur-none  `}>
            I am a self-taught aspiring software engineer (but a frontend
            developer by day), I love coding with a love hate relationship with
            javascript. this newfound passion for coding was there when i was in
            college but due to other passions, i had to put it in the backseat,
            but now i am really motivated to get better and create things with
            my code and strive to become an excellent software engineer. <br />
            <br />
          </p>
          <p className="text-center text-xl">Join me on my journey.</p>
          {/* <div className="about-btn-group text-center mt-8 ">
            <a
              href="mailto:onecode.aa@gmail.com"
              className=" btn rounded-full border-solid p-2.5 mx-2"
            >
              Hire Me
            </a>

            <a
              href="/Front-End-Dev-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" btn rounded-full border-solid p-2.5 mx-2"
            >
              Download CV
            </a>
          </div> */}
        </section>
      </article>
      <button className={`info-btn `}>
        <InfoIcon onClick={letSee} className="text-5xl hover:text-sky-100" />
      </button>
    </section>
  );
}

export default AboutMe;
