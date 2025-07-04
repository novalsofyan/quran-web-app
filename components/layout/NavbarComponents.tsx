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
    <nav className="font-size-navbar text-white font-semibold fixed top-0 w-screen flex justify-center items-center px-4 bg-green-700 h-16 select-none">
      <div className="w-full h-full max-w-[1920px] flex justify-between items-center">
        <div>
          <p>Qur&apos;an Web App</p>
        </div>

        <div onClick={toggleMenu} className="hamburger w-8 h-6 relative cursor-pointer md:hidden">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`
            nav-menu absolute flex flex-col gap-5 top-16 px-4 py-4 bg-green-700 h-[calc(100vh-64px)] w-4/5 transition-all duration-300 z-50
            md:static md:flex-row md:top-0 md:right-0 md:h-auto md:w-auto md:px-0 md:py-0
            ${isMenuOpen ? "right-0" : "right-[-100%]"}
          `}
        >
          <li>
            <Link onClick={toggleMenu} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href={"/quran-apps"}>
              App
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href={"/about"}>
              Tentang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
