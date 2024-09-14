"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/ventures.png";
export default function Header() {
  const [menuVisibility, setMenu] = useState(false);
  const [serviceVisibility, setServiceVisibility] = useState(false);
  return (
    <>
      <header
        className={`h-16 text-sm relative bg-white z-40 shadow-md flex justify-center items-center `}
      >
        <div className="flex justify-between px-5 items-center flex-1 max-w-[90em] ">
          <a href="/" className="flex items-center gap-4">
            <Image src={logo} alt="" className="w-10 aspect-auto" />
            <h1 className="text-2xl font-bold uppercase">CleenrSpot</h1>
          </a>
          <div className={`header-right z-50`}>
            <div
              className={`md:hidden`}
              onClick={() => setMenu(!menuVisibility)}
            >
              <span
                className={`bg-[#2A2A27] h-1 w-8 rounded block transition-all duration-500`}
                style={{
                  rotate: `${menuVisibility ? "45deg" : "0deg"}`,
                  transform: `${
                    menuVisibility
                      ? "translateY(8px) translateX(3.5px)"
                      : "translateY(0px)"
                  }`,
                }}
              ></span>
              <span
                className={`bg-[#2A2A27] h-1 w-8 rounded block transition-all duration-500 my-1`}
                style={{ opacity: `${menuVisibility ? 0 : 1}` }}
              ></span>
              <span
                className={`bg-[#2A2A27] h-1 w-8 rounded block transition-all duration-500`}
                style={{
                  rotate: `${menuVisibility ? "-45deg" : "0deg"}`,
                  transform: `${
                    menuVisibility
                      ? "translateY(-8px) translateX(3.5px)"
                      : "translateY(0px)"
                  }`,
                }}
              ></span>
            </div>

            <div
              className={` hidden gap-10 md:flex items-center transition-all duration-500`}
            >
              <button onClick={() => (location.href = "/")}>Home</button>
              <div className="relative container-dropdown">
                <button
                  onClick={() => setServiceVisibility(!serviceVisibility)}
                >
                  Services
                </button>
                <ServiceDrop
                  isVisible={serviceVisibility}
                  className={`absolute transition-all duration-300 shadow-md rounded-b-md mt-5 w-fit flex flex-col items-start bg-white text-nowrap`}
                />
              </div>
              <button onClick={() => (location.href = "/about-us")}>
                About Us
              </button>
              <button onClick={() => (location.href = "/contact-us")}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>
      <Menu visible={menuVisibility} />
    </>
  );
}

function ServiceDrop({
  className,
  isVisible,
}: {
  className: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`${className} transition-all duration-500 opacity-0`}
      style={{
        visibility: `${isVisible ? "visible" : "hidden"}`,
        opacity: `${isVisible ? 1 : 0}`,
      }}
    >
      <button
        onClick={() => (location.href = "/cleaning-window")}
        className="w-full px-5 py-4 ease-in-out duration-500 hover:bg-[#2a2a2750] overflow-hidden text-start"
      >
        Window Cleaning
      </button>
      <button
        onClick={() => (location.href = "/residential-cleaning")}
        className={`w-full ease-in-out duration-500 px-5 py-4  hover:bg-[#2a2a2750] text-start`}
      >
        Residential Cleaning
      </button>
      <button
        onClick={() => (location.href = "/commercial-cleaning")}
        className={`w-full ease-in-out duration-500 px-5 py-4 hover:bg-[#2a2a2750] text-start`}
      >
        Commercial Cleaning
      </button>
      <button
        onClick={() => (location.href = "/end-of-lease-cleaning")}
        className={`w-full ease-in-out duration-500 px-5 py-4 rounded-b-md hover:bg-[#2a2a2750] text-start`}
      >
        End of Lease Cleaning
      </button>
    </div>
  );
}

function Menu({ visible }: { visible: boolean }) {
  const [serviceState, setServiceState] = useState(false);
  return (
    <div
      className={`z-[26] shadow-md flex flex-col w-full mt-16 bg-white absolute text-gray-900 top-0 left-0 transition-all duration-500`}
      style={{ transform: `translateY(${visible ? "0" : "-100%"})` }}
    >
      <button
        onClick={() => (location.href = "/")}
        className={`h-14 px-4 text-start font-medium block`}
      >
        Home
      </button>
      <button
        className={`h-14 px-4 text-start font-medium block`}
        onClick={() => setServiceState(!serviceState)}
      >
        Services
      </button>
      <button
        onClick={() => (location.href = "/cleaning-window")}
        className="px-8 font-medium transition-all duration-500 text-start delay-0"
        style={{
          visibility: `${serviceState ? "visible" : "hidden"}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? "3.5rem" : "0",
        }}
      >
        Window Cleaning
      </button>
      <button
        onClick={() => (location.href = "/residential-cleaning")}
        className="px-8 font-medium transition-all duration-500 delay-100 text-start"
        style={{
          visibility: `${serviceState ? "visible" : "hidden"}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? "3.5rem" : "0",
        }}
      >
        Residential Cleaning
      </button>
      <button
        onClick={() => (location.href = "/commercial-cleaning")}
        className="px-8 font-medium transition-all duration-500 delay-200 text-start"
        style={{
          visibility: `${serviceState ? "visible" : "hidden"}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? "3.5rem" : "0",
        }}
      >
        Commercial Cleaning
      </button>
      <button
        onClick={() => (location.href = "/end-of-lease-cleaning")}
        className="px-8 font-medium transition-all duration-500 delay-300 text-start"
        style={{
          visibility: `${serviceState ? "visible" : "hidden"}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? "3.5rem" : "0",
        }}
      >
        End-of-Lease Cleaning
      </button>
      <button
        onClick={() => (location.href = "/about-us")}
        className={`h-14 px-4 text-start font-medium block`}
      >
        About Us
      </button>
      <button
        onClick={() => (location.href = "/contact-us")}
        className={`h-14 px-4 text-start font-medium block`}
      >
        Contact Us
      </button>
    </div>
  );
}
