import React from "react";

function ResumeExp() {
  return (
    <section className="experience">
      <h3 className="section-titles pb-3">Relevant Experience</h3>
      <article className="job flex justify-between my-5">
        <ul className="details">
          <li className="job-title">Software Developer</li>
          <li className="company-name">CourseCareer</li>
          <li className="when">May 2024 - Present</li>
        </ul>
        <ul className="detail-container w-7/12">
          <li>Create Websites with HTML and CSS</li>
          <li>Adding interactivity to those sites with JavaScript</li>
          <li>
            Create Mini Projects using the skills attained through the course
          </li>
          <li>Frameworks and Libraries like React</li>
          <li>Bash Fundamentals and Deploying Projects with Git and Github</li>
          <li>
            Learning about CS principles like: Algorithm Analysis, Data
            Structures & Problem Solving Techniques
          </li>
          <li>Backend Development with Go</li>
          <li>
            Software Engineering Principles such as: Clean Code and Software
            Design and Testing
          </li>
          {/* <li></li> */}
        </ul>
      </article>
      <article className="job flex justify-between my-8">
        <ul className="details">
          <li className="job-title">Front-End Engineer</li>
          <li className="company-name">Codecedemy</li>
          <li className="when">November 2023 - Present</li>
        </ul>

        <ul className="detail-container w-7/12">
          <li>
            Currently take front-end engineering course and building my
            knowledge and portfolio
          </li>
          <li>
            Introduced to UI/UX concepts and working with different frameworks
            and libraries
          </li>
          {/* <li></li>
                <li></li>
                <li></li>  */}
        </ul>
      </article>
      <article className="job flex justify-between my-8">
        <ul className="details">
          <li className="job-title">Front-End Web Developer</li>
          <li className="company-name">One Code Camp</li>
          <li className="when">March 2024 – March 2024</li>
        </ul>

        <ul className="detail-container w-7/12">
          <li>
            Introduce participants to the fundamental concepts of front-end
            development.
          </li>
          <li>
            Offer practical, hands-on experience with HTML, CSS, JavaScript, and
            an introduction to React.
          </li>
          <li>Explore the structure and semantics of web pages using HTML.</li>
          <li>
            Familiarize participants with the principles of styling and design
            using CSS.
          </li>
          <li>
            Dive into the functionality and interactivity of web pages through
            JavaScript.
          </li>
          <li>
            Offer an introductory overview of React and its role in modern web
            development.
          </li>
          <li>
            Encourage active participation through practical exercises and
            projects.
          </li>
          <li>
            Foster a supportive learning environment conducive to exploration
            and experimentation.
          </li>
          <li>
            Prepare participants with foundational skills to pursue further
            learning in front-end development.
          </li>
          {/* <li></li> */}
        </ul>
      </article>
      {/* <article className="job">
              <ul className="details"> <li></li>
              <li></li>
              <li></li>
                <span className="company-name"></span> <span className="when"></span>
              </ul>
              <ul className="detail-container">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </article>
            <article className="job">
                <ul className="details"> <li></li>
                <li></li>
                <li></li>
                  <span className="company-name"></span> <span className="when"></span>
                </ul>
                <ul className="detail-container">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </article>
              <article className="job">
                <ul className="details"> <li></li>
                <li></li>
                <li></li>
                  <span className="company-name"></span> <span className="when"></span>
                </ul>
                <ul className="detail-container">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </article> */}
    </section>
  );
}

export default ResumeExp;
