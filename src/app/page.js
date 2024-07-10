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
      className={`body-wrapper w-full md:flex md:flex-col lg:max-w-screen-2xl lg:min-h-screen m-auto lg:grid lg:grid-cols-10 lg:grid-rows-10 lg:gap-1 ${themeStatus}`}
    >
      <NavCards />
      <Hero />
      <SocialNavBar />
      <div className="theme-btn-container w-full py-3 col-start-10 col-end-11 row-start-1 row-end-2">
        <button type="button" className={`themeToggler ${toggle}`}>
          <span
            className={`statusIndicator ${toggle}`}
            onClick={toggleTheme}
          ></span>
        </button>
      </div>
    </div>
  );
}
