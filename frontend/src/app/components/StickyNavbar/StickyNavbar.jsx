"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "./logo.png";

const navItems = ["home", "events", "speakers", "location", "team", "contact"];

const HamOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const HamClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function StickyNavbar() {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setScroll] = useState(true);

  return (
    // Rest of your component code remains unchanged
    // navbar component
    <nav
      className={`w-full text-white  flex flex-row justify-between z-[1000] transition duration-600 ${
        navScroll ? "shadow-xl bg-[#27282A]" : ""
      }`}
    >
      {/* logo  */}
      <div
        className={`logo px-4 py-4 md:px-8 md:py-2 flex justify-center items-center w-1/3 h-1/3 ${
          !navScroll
            ? "lg:w-1/3 lg:h-1/3"
            : "md:w-1/3 md:h-1/3 lg:w-1/6 lg:h-1/6"
        } xs:px-8 xs:py-8 transition duration-600`}
      >
        <Link href="/">
          <img
            className="cursor-pointer"
            src={logo.src}
            alt="Renaissance Logo"
          />
        </Link>
      </div>

      {/* Navigation Menu  */}
      <div className="container hidden md:flex justify-end px-3 xl:px-12">
        <ul className="text-custom-nav text-sm font-light flex flex-row justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={`link-${item}`}
              href={
                item === "team"
                  ? "/team"
                  : item === "speakers"
                  ? "/allspeakers"
                  : `/#${item}`
              }
              className="mx-2 px-1 lg:mx-4 lg:px-2 relative  before:content-[''] before:absolute before:bg-custom-accent before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-custom-secondary"
            >
              <li className="cursor-pointer">{item.toUpperCase()}</li>
            </Link>
          ))}
          <Link
            href="/auth/register"
            className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark text-sm font-semibold shadow-[inset_0_0_0_0_rgb(132,169,140)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(132,169,140)] transition ease-in-out delay-50 duration-300"
          >
            <li className="cursor-pointer" key={`link-confirmYourSeat`}>
              CONFIRM YOUR SEAT
            </li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Navigation Menu  */}
      <div className="md:hidden relative flex justify-center items-center cursor-pointer mr-3 ">
        <div className="flex" onClick={() => setToggle(true)}>
          {HamOpen}
        </div>
        {toggle && (
          <div>
            <motion.div
              className="md:hidden fixed top-0 left-0 right-0 p-1 w-screen h-screen flex justify-end items-end flex-col bg-custom-dark shadow-lg z-50 pb-4"
              animate={{ y: [-500, 0] }}
              transition={{
                type: "spring",
                bounce: 0.25,
                damping: 9,
                mass: 0.5,
              }}
            >
              <div className="flex p-3" onClick={() => setToggle(false)}>
                {HamClose}
              </div>

              {/* logo */}
              <div className="logo p-1 my-5 w-full flex justify-center items-center">
                <img
                  className="w-[70%]"
                  src={logo.src}
                  alt="Renaissance Logo"
                />
              </div>

              {/* Nav-items  */}
              <ul className="m-0 p-0 h-full w-full text-custom-nav text-xs flex flex-col justify-start items-center ">
                {navItems.map((item) => (
                  <li
                    className="mx-10 my-3 cursor-pointer"
                    key={`link-${item}`}
                  >
                    <Link
                      key={`link-${item}`}
                      href={
                        item === "team"
                          ? "/team"
                          : item === "speakers"
                          ? "/allspeakers"
                          : `/#${item}`
                      }
                      onClick={() => setToggle(false)}
                      className="text-base font-light text-custom-light"
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                ))}
                <Link
                  href="/auth/register"
                  className=""
                  onClick={() => setToggle(false)}
                >
                  <li className="my-4 p-4 cursor-pointer bg-custom-secondary shadow-sm text-base font-bold text-custom-accent">
                    CONFIRM YOUR SEAT
                  </li>
                </Link>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default StickyNavbar;
