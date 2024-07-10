"use client";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import ContactForm from "./ContactForm";

function NavCards() {


  return (
    <main className="main  main-container w-full flex justify-center col-start-2 col-end-10 row-start-2 row-end-9 md:order-1">
      <div className="container w-full flex min-h-full justify-evenly gap-2">
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </main>
  );
}

export default NavCards;
