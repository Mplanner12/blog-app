"use client";

import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx"; // Import for hamburger icon

export default function Header() {
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false); // New state

  return (
    <nav className="z-20 w-full h-full pt-4 lg:pt-4 lg:pb-4 shadow-xs bg-white flex flex-col justify-start items-center lg:gap-y-4 relative">
      <div className="w-full flex justify-between items-center pb-0 lg:pb-5 border-b border-[#DDD0DA] px-6 md:px-16">
        <div className="w-full h-full">
          {/* Logo */}
          <Link href="/" className="w-fit flex items-center">
            <Image
              alt="Tobams Group Logo"
              className="h-14 w-32"
              height={100}
              src="/tobams-logo.png"
              width={100}
            />
          </Link>
        </div>
        {/* Account and Assessment Buttons */}
        <div className="hidden w-full lg:flex justify-end items-center space-x-4">
          <div className="relative">
            <button
              className="bg-[#571244] text-white px-6 py-2 rounded-md flex items-center"
              onClick={() => setAccountDropdownOpen(!isAccountDropdownOpen)}
            >
              <div className="mr-2 rounded-full p-2 bg-[#DDD0DA] flex items-center justify-center">
                <LuUser className="text-lg text-[#571244]" />
              </div>
              Account <MdKeyboardArrowDown className="ml-1" />
            </button>
            {isAccountDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg py-2 w-40">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="bg-[#EF4353] text-white px-6 py-3 rounded-md"
          >
            Take Assessment
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-6 right-4 bg-black p-1 rounded-lg flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <RxHamburgerMenu size={24} className="text-white" />{" "}
        {/* Hamburger icon */}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl pt-2 pb-4 z-50">
          <div className="relative w-full text-center">
            <button
              className="bg-[#571244] w-full text-white px-6 py-2 flex items-center justify-center"
              onClick={() => setAccountDropdownOpen(!isAccountDropdownOpen)}
            >
              <div className="mr-2 rounded-full p-2 bg-[#DDD0DA] flex items-center justify-center">
                <LuUser className="text-lg text-[#571244]" />
              </div>
              Account <MdKeyboardArrowDown className="ml-1" />
            </button>
            {isAccountDropdownOpen && (
              <div className="w-full flex flex-col justify-normal items-center absolute left-0 mt-2 bg-white shadow-lg py-2 text-left z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="block w-full text-center bg-[#EF4353] text-white px-6 py-3 mb-4"
          >
            Take Assessment
          </Link>
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-2 text-gray-800 font-semibold text-lg">
            <li className="relative">
              <button
                onClick={() => setSubmenuOpen((prev) => !prev)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
              >
                About <MdKeyboardArrowDown className="ml-1" />
              </button>
              <div className="w-full px-4 py-2">
                <ul className={submenuOpen ? "block" : "hidden"}>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* What We Do (New code with dropdown) */}
            <li className="relative">
              <button
                onClick={() => setWhatWeDoOpen((prev) => !prev)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
              >
                What We Do <MdKeyboardArrowDown className="ml-1" />
              </button>
              <div className="w-full px-4 py-2 ">
                <ul className={whatWeDoOpen ? "block" : "hidden"}>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
                    >
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Other Links (Without dropdowns) */}
            {[
              "Jobs",
              "Projects",
              "TG Academy",
              "Strategic Partnership",
              "Pricing",
              "Book a Consultation",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
        <li className="relative group">
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244] flex items-center"
          >
            About <MdKeyboardArrowDown className="ml-1" />
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
            >
              Our Story
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
            >
              Our Team
            </Link>
          </div>
        </li>
        <li className="relative group">
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244] flex items-center"
          >
            What We Do <MdKeyboardArrowDown className="ml-1" />
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
            >
              Solutions
            </Link>
          </div>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            TG Academy
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            Strategic Partnership
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-[#571244] hover:underline hover:underline-offset-4 active:text-[#571244] active:underline underline-offset-4 decoration-[#571244]"
          >
            Book a Consultation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
