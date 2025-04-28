'use client'
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { BiMenuAltLeft, BiX } from "react-icons/bi"; // Import BiX icon
import  Link  from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && !event.target.closest("a") && isOpen) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`font-Nunito h-auto w-full lg:relative z-50 bg-companyRed ${
          isOpen ? "bg-companyRed" : ""
        } navbar`}>
        <div className="flex flex-wrap justify-between items-center ">
          <Link href="/">
            <img
              src="/assets/logo4.svg"
              alt="company logo"
              className="h-20 w-20 ml-8 lg:h-16 lg:w-40 lg:ml-8"
            />
          </Link>

          <div className="relative hidden lg:flex justify-between ml-[520px]">
            <MdOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 h-6 w-6 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="w-full lg:w-[400px] pl-10 pr-4 py-2 h-10 bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl text-white"
            />
            <button className="bg-companyWhite text-center hidden lg:block w-20 h-10 lg:mr-[10px] text-companyRed rounded-3xl hover:bg-slate-200 ">
              <Link href="login"> Sign in </Link>
            </button>
          </div>
        </div>
          <button
            className="inline-flex items-center p-2 ml-auto mr-[20px] text-sm text-white rounded-lg lg:hidden hover:bg-red-700"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen}
            onClick={toggle}
          >
            {isOpen ? <BiX className="h-9 w-9" /> : <BiMenuAltLeft className="h-9 w-9" />}
          </button>

        <div className="flex flex-wrap justify-between items-center pb-2 ">
          <div className="relative flex-1  mx-4 lg:hidden">
            <MdOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 h-6 w-6 text-white" />
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] pl-10 pr-4 py-2 h-[30px] bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl text-white"
            />
          </div>
          <button className="bg-companyWhite text-center w-[75px] h-[35px] mr-[10px] lg:hidden text-companyRed rounded-3xl hover:bg-slate-200 ">
            <Link href="login"> Sign in </Link>
          </button>
        </div>

        <nav className="hidden md:block">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <div
              className={`w-full lg:block lg:w-auto ${
                isOpen ? "block" : "hidden"
              }`}
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg lg:flex-row lg:space-x-5 lg:mt-0 lg:ml-10 lg:mr-10 lg:border-0 lg:bg-transparent ">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sports"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lifestyle"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politics"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Politics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/science"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Science & Tech
                  </Link>
                </li>
                <li>
                  <Link
                    href="/culture"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Culture & Religion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/earth"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Earth & Wildlife
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/awards"
                    className="block py-2 px-[1px] text-end text-xs lg:text-sm text-white hover:bg-companyOrange lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                  >
                    CheckUpdate Awards
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <nav className="w-60 mx-auto fixed right-4 md:hidden z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div
            className={`w-full lg:block lg:w-auto ${
              isOpen ? "block bg-companyRed" : "hidden"
            }`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg lg:flex-row lg:space-x-5 lg:mt-0 lg:ml-10 lg:mr-10 lg:border-0 lg:bg-transparent ">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-[1px] ml-[142px] w-[50px] text-xs text-end lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/sports"
                  className="block py-2 px-[1px] ml-[142px] w-[50px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/entertainment"
                  className="block py-2 px-[1px] ml-[92px] w-[100px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="block py-2 px-[1px] ml-[112px] w-[80px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="block py-2 px-[1px] ml-[130px] w-[60px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/politics"
                  className="block py-2 px-[1px] ml-[140px] w-[50px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="block py-2 px-[1px] ml-[122px] w-[70px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/science"
                  className="block py-2 px-[1px] ml-[80px] w-[110px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Science & Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/culture"
                  className="block py-2 px-[1px] ml-[48px] w-[140px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Culture & Religion
                </Link>
              </li>
              <li>
                <Link
                  href="/earth"
                  className="block py-2 px-[1px] ml-[67px] w-[120px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Earth & Wildlife
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities"
                  className="block py-2 px-[1px] ml-[75px] w-[110px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="block py-2 mb-2 px-[1px] ml-[24px] w-[160px] text-end text-xs lg:text-sm text-white hover:border-b-2 hover:text-base lg:hover:bg-transparent dark:text-white lg:hover:border-b-2 lg:hover:border-white-700 lg:hover:pb-2"
                >
                  CheckUpdate Awards
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
