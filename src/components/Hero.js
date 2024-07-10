import React from "react";

function Hero() {
  return (
    <section className="hero w-full flex flex-col justify-center align-center col-start-4 col-end-8 row-start-9 row-end-11 md:order-2 sm:order-2">
      <h1 className="hero-title text-center text-6xl">
        Frontend <span className="mid-xo">Web </span>
        <span className="ox">Developer</span>
      </h1>
      <h3 className="hero-name  text-center">
        Mohamed <span className="xo">Jalloh</span>
      </h3>
    </section>
  );
}

export default Hero;
