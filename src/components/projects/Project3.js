import React from "react";
import Image from "next/image";

function Project3() {
  return (
    <section className="project-container">
      <article className="project">
        <Image
          src="/counter app.png"
          className="project-img"
          width={200}
          height={200}
          alt="counter app"
        />
      </article>
      <h3 className="project-name">Counter with dark-mode</h3>
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
    </section>
  );
}

export default Project3;
