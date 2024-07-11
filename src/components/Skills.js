"use client";

import React, { useState } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";

function Skills() {
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
      className={`skills card min-h-full md:w-full sm:w-full md:grayscale-0 sm:grayscale-0 lg:grayscale lg:hover:grayscale-0 p-4 bg-emerald-500 md:order-4 ${viewing}`}
    >
      <article className="section-container">
        <h2 className="section-title m-auto text-center ">Skills</h2>
        <section className={`content ${iAmIt}`}>
          <article className={`skillset-container m-auto flex flex-col`}>
            <h3 className="skillset-category-title text-center mb-1.5 text-2xl">
              Web Development
            </h3>
            <section className="content skills-box flex m-auto align-center py-1.5 text-center space-evenly">
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/html.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="HTML"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/css.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="CSS"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/js.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="JavaScript"
                />
              </article>
            </section>
          </article>
          <article className=" skillset-container m-auto flex flex-col">
            <h3 className="skillset-category-title text-center mb-1.5 text-2xl">
              Programming Languages
            </h3>
            <section className="skills-box flex m-auto align-center py-1.5 text-center space-evenly">
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/js.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="JavaScript"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/python.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Python"
                />
              </article>
              {/* <article className="skills-card flex justify-center align-center">
        <Image
            src=""
            width={35}
            height={35}
            alt=""
          />


        </article>

        <article className="skills-card flex justify-center align-center">

        <Image
            src=""
            width={35}
            height={35}
            alt=""
          />
</article> */}
            </section>
          </article>
          <article className=" skillset-container m-auto flex flex-col">
            <h3 className="skillset-category-title text-center mb-1.5 text-2xl">
              Libraries & Frameworks
            </h3>
            <section className="skills-box flex m-auto align-center py-1.5 text-center space-evenly">
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/jquery.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="JQuery"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/bootstrap.png"
                  width={35}
                  height={35}
                  alt="Bootstrap"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/React.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="React"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Next.js.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="NextJs"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Tailwind CSS.png"
                  width={35}
                  height={35}
                  alt="Tailwind CSS"
                />
              </article>
              {/* 
          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle>

          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle>

          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle> */}
            </section>
          </article>
          <article className=" skillset-container m-auto flex flex-col">
            <h3 className="skillset-category-title text-center mb-1.5 text-2xl">
              Tools
            </h3>
            <section className="skills-box flex w-full m-auto align-center py-1.5 text-center justify-center flex-wrap">
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Git.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Git"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/github.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Github"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Bash.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Bash"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Docker.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Docker"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Figma.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Figma"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/NPM.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="NPM"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Vercel.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Vercel"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Slack.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Slack"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/VSCode.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="VS Code"
                />
              </article>
              {/* <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle>
          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle>
          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle> */}
            </section>
          </article>

          <article className=" skillset-container m-auto flex flex-col">
            <h3 className="skillset-category-title text-center mb-1.5 text-2xl">
              Other Technologies
            </h3>
            <section className="skills-box flex m-auto align-center py-1.5 text-center space-evenly">
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Apple.png"
                  width={35}
                  height={35}
                  alt="Apple Products"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/linux.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Linux"
                />
              </article>
              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Windows 11.png"
                  width={35}
                  height={35}
                  alt="Windows OS"
                />
              </article>

              <article className="skills-card flex justify-center align-center">
                <Image
                  src="/Android.png"
                  className="skill-img"
                  width={35}
                  height={35}
                  alt="Android"
                />
              </article>
              {/* <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle>
          <ar35cle className="skills-card flex justify-center align-center">
            <Image src="" className="skill-img" width={35} height={50} alt="" />
          </ar35cle> */}
            </section>
          </article>
          {/* 
      <article className=" skillset-container m-auto flex flex-col">
        <h3 className="skillset-category-title text-center mb-1.5 text-2xl">Web Development</h3>
        <section className="skills-box flex m-auto align-center py-1.5 text-center space-evenly">
          <article35 className="skills-card flex justify-center align-center">
            <Image src="/html.png" className="skill-img" width={35} height={50} alt="HTML" />
          </article35          <article35 className="skills-card flex justify-center align-center">
            <Image src="/css.png" className="skill-img" width={35} height={50} alt="CSS" />
          </article35          <article35 className="skills-card flex justify-center align-center">
            <Image src="/js.png" className="skill-img" width={35} height={50} alt="JavaScript" />
          </article35
          <article className="skills-card flex justify-center align-center"></article>
        </section>
      </article> */}
        </section>
      </article>
      <button className="info-btn">
        <InfoIcon onClick={letSee} className="text-5xl hover:text-sky-100" />
      </button>
    </section>
  );
}

export default Skills;
