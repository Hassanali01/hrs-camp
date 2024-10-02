"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faUsers, faInfoCircle, faTools, faBlog, faCogs, faUserTie, faEnvelope, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import hrsLogo from '@/app/assests/hrs-logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Handle click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);  // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Scroll effect: Apply blur when user scrolls past a section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionOffsetTop = section.offsetTop;
        
        if (scrollPosition > sectionOffsetTop) {
          let blurValue = Math.min(10, (scrollPosition - sectionOffsetTop) / 300);
          section.style.filter = `blur(${blurValue}px)`;
          section.style.opacity = 1 - (blurValue / 10);
        } else {
          section.style.filter = 'none';
          section.style.opacity = 1;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  // Empty dependency array ensures this effect runs once on mount

  return (
    <>
    <header className="rounded-2xl fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full top-10 bg-header-hrs ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={hrsLogo.src} alt="HRSCamp" className="h-12 my-2 " />
          </Link>
        </div>
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="p-1 border border-grey rounded-md bg-slate-200 hover:bg-slate-300 hover:opacity-70 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faBars} className="w-7 h-5" />
       
    
      </button>

      {isDropdownOpen && (
        <div
        ref={dropdownRef} 
          id="navbar-dropdown"
          className={`absolute top-6 right-full mt-2 bg-slate-900 opacity-80 shadow-md rounded-md overflow-hidden ml-4 opacity-0 transition-opacity duration-500 ease-out ${
            isDropdownOpen ? "opacity-100" : ""
          }`}
          style={{ width: "300px" }}
        >
          <div className="ml-2 mr-2 mt-3">
            <Link
              href="/about"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
                {/* <FcAbout className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faInfoCircle} className="mt-1 mr-2 mb-1" />
                About
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
                 href="/team"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
                {/* <GiTeamIdea className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faUsers} className="mt-1 mr-2 mb-1" />
                Team
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
                 href="/client"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faUserTie} className="mt-1 mr-2 mb-1" />
                {/* <RiTeamFill className="mt-1 mr-2 mb-1" /> */}
                Client
              </span>
            </Link>

            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/candidate"
            >
              <span className="flex">
                {/* <FaPerson className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faUser} className="mt-1 mr-2 mb-1" />
                Candidate
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/services"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faTools} className="mt-1 mr-2 mb-1" />
                
                {/* <GrServices className="mt-1 mr-2 mb-1" /> */}
                Services
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/model"
            >
              <span className="flex">  
              <FontAwesomeIcon icon={faCogs} className="mt-1 mr-2 mb-1" />

                {/* <MdModelTraining className="mt-1 mr-2 mb-1" /> */}
                Model
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/blog"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faBlog} className="mt-1 mr-2 mb-1" />
                {/* <FaBlog className="mt-1 mr-2 mb-1" /> */}
                Blog
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/faqs"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faQuestionCircle} className="mt-1 mr-2 mb-1" />
                {/* <FcFaq className="mt-1 mr-2 mb-1" /> */}
                FAQs
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                 href="/contact"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-2 mb-1" />
                {/* <MdContacts className="mt-1 mr-2 mb-1" /> */}
                Contact
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          {/* Add other links as needed */}
        </div>
      )}
    </div>
    </nav>
    </header>
    </>
  );
};

export default Navbar;