import React from "react";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import linkedIn from "./linkedin.png";
import github from "./github.png";

const Navbar = () => {
  return (
    <nav className="m-3 border-2 border-black p-2 font-body text-xl">
      <ul className="flex flex-row justify-center gap-20">
        <li className="mt-1">
          <Link to="/">Home</Link>
        </li>
        <Popover className="relative z-50">
          <Popover.Button className="mt-1">Projects</Popover.Button>
          <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                <a
                  href="https://crandall-drumkit.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  Drumkit
                </a>
                <a
                  href="https://breaking-bad-quote-gen.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  Breaking Bad Quotes
                </a>
                <a
                  href="https://crandall-calculator.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  Calculator
                </a>
                <a
                  href="https://crandall-pomodoro-timer.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  Pomodoro Clock
                </a>
                <a
                  href="https://crandall-markdown-previewer.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  Markdown Previewer
                </a>
                <a
                  href="https://nasa-apod-ac.netlify.app"
                  className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2"
                >
                  NASA APOD
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <Link to="/contact" className="text-xl mt-1">
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/anna-crandall/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="linked-in">
            <img
              alt="linkedIn logo and link"
              src={linkedIn}
              className="w-8 h-7 mt-1"
            ></img>
          </button>
        </a>
        <a
          href="https://github.com/annacrandall"
          target="_blank"
          rel="noreferrer"
        >
          <button id="github-logo">
            <img
              alt="github logo and link"
              src={github}
              className="h-7 mt-1"
            ></img>
          </button>
        </a>
      </ul>
    </nav>
  );
};
export default Navbar;
