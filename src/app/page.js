"use client";

import Hero from "@/components/Hero";
import NavCards from "@/components/NavCards";
import SocialNavBar from "@/components/SocialNavBar";

import React, { useContext, useState } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

// import Image from "next/image";

export default function Home() {
  const { themeStatus, toggleTheme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={`body-wrapper w-full md:min-h-screen sm:min-h-screen sm:relative md:relative ${themeStatus}`}
    >
      <div
        className={`content-wrapper w-full md:min-h-screen  md:relative sm:relative md:flex md:flex-col lg:max-w-screen-2xl lg:min-h-screen m-auto  sm:min-h-screen sm:flex sm:flex-col lg:grid lg:grid-cols-10 lg:grid-rows-10 lg:gap-1`}
      >
        <NavCards />
        <Hero />
        <SocialNavBar />
        <div className="theme-btn-container sm:absolute sm:top-0 sm:left-1/3 md:absolute md:top-0 md:left-1/3  w-full py-3 col-start-10 col-end-11 row-start-1 row-end-2 ">
          <button type="button" className={`themeToggler ${toggle}`}>
            <span
              className={`statusIndicator ${toggle}`}
              onClick={toggleTheme}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
