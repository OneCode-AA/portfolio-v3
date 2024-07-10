"use client";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";

function ContactForm() {
  const [view, setView] = useState(false);
  const [visible, isVisible] = useState(false);

  function letSee() {
    return setView(!view) || isVisible(!visible);
  }

  let viewing = view ? "viewing" : "notViewing";
  let cardInfo = "about-me";

  let iAmIt = visible ? "visible" : "nonVisible";
  let sectionContent = "content";

  if (letSee === true && setView === true) {
    cardInfo.classList("viewing");
    sectionContent.classList("NonVisible");
  }
  return (
    <section
      className={`contact-form card min-h-full p-4 bg-rose-900 md:order-6 md:w-full sm:w-full md:grayscale-0 sm:grayscale-0 lg:grayscale lg:hover:grayscale-0 ${viewing}`}
    >
      {" "}
      <h2 className="section-title text-center ">Contact</h2>
      <article className={`content ${iAmIt} `}>
        <form
          class={` content rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 `}
        >
          <h1 class="text-2xl font-bold dark:text-gray-50">Send a message</h1>

          <label
            for="fullname"
            class="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name<span class="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            for="email"
            class="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            for="subject"
            class="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            for="message"
            class="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span class="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          <div class="flex flex-row items-center justify-center">
            <a href="mailto:onecode.aa@gmail.com">
              <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                Send
                <SendIcon
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="text-cyan-500 ml-5"
                  fill="currentColor"
                />
              </button>
            </a>
          </div>
        </form>
      </article>
      <button className="info-btn">
        <InfoIcon onClick={letSee} className="text-5xl hover:text-sky-100" />
      </button>
    </section>
  );
}

export default ContactForm;
