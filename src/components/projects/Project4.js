import React from "react";
import Image from "next/image";

function Project4() {
  return (
  <section className="project-container">
    <article className="project">
      <Image
        src="/image-slider.png"
        className="project-img"
        width={200}
        height={200}
        alt="image-slider"
      />
    </article>
    <h3 className="project-name">Image Slider</h3>
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
    </article>
  </section>)
}

export default Project4;
