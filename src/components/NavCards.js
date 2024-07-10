"use client";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import ContactForm from "./ContactForm";

function NavCards() {
  return (
    <main className="main  main-container w-full flex justify-center col-start-2 col-end-10 row-start-2 row-end-9 lg:h-full md:w-full md:align-center md:m-auto md:justify-center md:flex md:flex-col md:order-1 sm:w-full sm:align-center sm:m-auto sm:justify-center sm:flex sm:flex-col sm:order-2 ">
      <div className="container w-full flex min-h-full justify-evenly gap-2 lg:flex lg:flex-row md:flex md:flex-col md:align-center md:m-auto  sm:m-auto sm:flex sm:flex-col md:justify-center">
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </main>
  );
}

export default NavCards;
