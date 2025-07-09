"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavbarComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="font-size-navbar text-white font-semibold fixed top-0 w-screen flex justify-center items-center px-10 bg-green-700 h-16 select-none grow-0 shrink-0 z-50">
      <div className="w-full h-full max-w-[1920px] flex justify-between items-center">
        <div>
          <p>Qur&apos;an Web App</p>
        </div>

        <div onClick={toggleMenu} className="hamburger w-8 h-6 relative cursor-pointer md:hidden">
          <span
            className={`
            ${isMenuOpen ? "top-[42%] transform-gpu rotate-45" : "top-0"} transition-all duration-300
            `}
          ></span>
          <span
            className={`
            ${isMenuOpen ? "top-[42%] opacity-0" : "top-[42%]"} transition-all duration-300
            `}
          ></span>
          <span
            className={`
            ${isMenuOpen ? "top-[42%] transform-gpu rotate-[-45deg]" : "bottom-0"} transition-all duration-300
            `}
          ></span>
        </div>

        <ul
          className={`
            nav-menu absolute flex flex-col gap-5 top-16 px-10 py-4 bg-green-700 h-fit w-full transition-all duration-300 z-50 rounded-b-lg shadow-md
            md:static md:flex-row md:top-0 md:right-0 md:h-auto md:w-auto md:px-0 md:py-0 md:shadow-none
            ${isMenuOpen ? "right-0" : "right-[-100%]"}
          `}
        >
          <li>
            <Link
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleMenu();
                }
              }}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleMenu();
                }
              }}
              href={"/quran-apps?page=1"}
              prefetch={false}
            >
              App
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleMenu();
                }
              }}
              href={"/about"}
            >
              Tentang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
