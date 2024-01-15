"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

import { Quantico } from "next/font/google";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"] });

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const { width } = useMediaQuery()

  const handleOpenMobileMenu = () => {
    console.log("opened");
    setOpenMobileMenu(!openMobileMenu);
  };

  const handleCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const openedMobileMenuClasses = openMobileMenu
    ? "translate-x-0 opacity-100" // Menu visible
    : "-translate-x-full opacity-0"; // Menu hidden

  return (
      <div
        className={`flex items-center justify-between p-5 ${quantico.className} w-4/5 m-auto`}
      >
        <Link href={"/"} className="text-2xl text-electric-violet font-bold">
          Kev<span className="text-midnight">The</span>Dev
          <span className="text-midnight">.</span>
        </Link>
        {/* Mobile Menu */}
        {width < 640 ? (
          <div>
            <TiThMenu
              size={40}
              color="#141c3a"
              className="hover:cursor-pointer p-2"
              onClick={handleOpenMobileMenu}
            />

            <nav
              className={`flex flex-col items-center absolute top-0 left-0 w-full h-full bg-slate-200 transition-transform duration-300 ease-in-out ${openedMobileMenuClasses}`}
            >
              <TiTimes
                size={40}
                color="#141c3a"
                className="hover:cursor-pointer p-2"
                onClick={handleCloseMobileMenu}
              />
              {/* Menu Items */}
              <Link href={"/"} className="mb-2">
                Home
              </Link>
              <Link href={"/about"} className="mb-2">
                About
              </Link>
              <Link href={"/services"} className="mb-2">
                Services
              </Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>
          </div>
        ) : (
          <nav>
            {/* Menu Items */}
            <Link href={"/"} className="mr-5 hover:text-electric-violet transition-all ease-in-out delay-75">
              Home
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-electric-violet transition-all ease-in-out delay-75">
              About
            </Link>
            <Link href={"/services"} className="mr-5 hover:text-electric-violet transition-all ease-in-out delay-75">
              Services
            </Link>
            <Link href={"/contact"} className="hover:text-electric-violet transition-all ease-in-out delay-75">Contact</Link>
          </nav>
        )}
      </div>
  );
};
