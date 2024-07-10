"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import Link from "next/link";

function SocialNavBar() {
  return (
    <aside className="aside social-nav pl-4 col-start-1 col-end-2 row-start-5 row-end-7 md:order-7 md:flex  md:w-full md:m-auto sm:order-7 sm:flex  sm:w-full sm:m-auto ">
      <ul className="social-nav-ul md:flex md:flex-row lg:flex lg:flex-col md:m-auto sm:flex sm:flex-row sm:m-auto">
        <li className="social-nav-li">
          <a href="https://github.com/OneCode-AA" className="social-nav-li-a ">
            <GitHubIcon className="text-5xl  hover:text-slate-700" />
          </a>
        </li>
        <li className="social-nav-li">
          <a
            href="https://www.linkedin.com/in/abooabdillaahmbj/"
            className="social-nav-li-a"
          >
            <LinkedInIcon className="text-5xl  hover:text-blue-700" />
          </a>
        </li>
        <li className="social-nav-li">
          <Link href="/resume" className="social-nav-li-a">
            <VerifiedIcon className="text-5xl  hover:text-rose-500" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SocialNavBar;
