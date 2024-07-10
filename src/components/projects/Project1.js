import React from "react";
import Image from "next/image";

function Project1() {
  return (
    <section className="project-container">
      <article className="project">
        <section className="dual-img">
          <Image
            src="/portfolio-dark.png"
            id="project-img"
            className="project-img"
            width={200}
            height={200}
            sizes="(max-width: 250px) 50vw, 20vw"
            alt="portfolio dark"
          />
          <Image
            src="/portfolio-light.png"
            className="project-img"
            width={200}
            height={200}
            sizes="(max-width: 250px) 50vw, 20vw"
            alt="portfolio light"
          />
        </section>
        <h3 className="project-name">Portfolio v2</h3>
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
    </section>
  );
}

export default Project1;
