import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import companyLogo from '../assets/logo2.svg'
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };


  return (
    <>
      <div className="font-Nunito bg-companyRed h-auto w-full fixed lg:relative">
        <div className="flex flex-wrap justify-between items-center">
          <Link to={'/'}>
            <img src={companyLogo} alt="company logo" className="h-20 w-20 lg:h-40 lg:w-40 lg:ml-8"/>
          </Link>

          <div className='relative flex-1 mx-4 lg:hidden'>
              <MdOutlineSearch className='absolute top-1/2 transform -translate-y-1/2 left-3 h-6 w-6 text-white'/>
              <input type="text" placeholder='Search' className='w-full lg:w-[600px] pl-10 pr-4 py-2 h-10 bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl text-white'/>
          </div>
          <div className='relative flex-1 hidden lg:block ml-[420px] '>
              <MdOutlineSearch className='absolute top-1/2 transform -translate-y-1/2 left-3 h-6 w-6 text-white'/>
              <input type="text" placeholder='Search' className='w-full lg:w-[400px] pl-10 pr-4 py-2 h-10 bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl text-white'/>
          </div>
          <button className='bg-companyWhite text-center w-20 h-10 lg:mr-20 text-companyRed rounded-3xl'>Sign In</button>
        </div>
      

        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button className="inline-flex absolute right-2 top-16 items-center p-2 text-right text-sm text-white rounded-lg lg:hidden hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:hover:bg-red-700 dark:focus:ring-black" aria-controls="navbar-solid-bg" aria-expanded={isOpen} onClick={toggle} >
              <BiMenuAltLeft className="h-9 w-9 text-right "/>
            </button>
            <div className={`w-full lg:block lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
              <ul className="flex flex-col font-medium mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent ">
                <li>
                  <Link to={'/'} className="block py-2 px-[2px] text-end text-sm text-white hover:underline lg:bg-transparent lg:text-red-700">News</Link>
                </li>
                <li>
                    <Link to={'/sports'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Sports</Link>
                </li>
                <li>
                  <Link to={'/entertainment'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Entertainment</Link>
                </li>
                <li>
                  <Link to={'/lifestyle'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Lifestyle</Link>
                </li>
                <li>
                  <Link to={'/politics'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Politics</Link>
                </li>
                <li>
                  <Link to={'/business'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Business</Link>
                </li>
                <li>
                  <Link to={'/science'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Science & Tech</Link>
                </li>
                <li>
                  <Link to={'/culture'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Culture & Religion</Link>
                </li>
                <li>
                  <Link to={'/earth'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Earth & Wildlife</Link>
                </li>
                <li>
                  <Link to={'/opportunities'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">Opportunities</Link>
                </li>
                <li>
                  <Link to={'/awards'} className="block py-2 px-[2px] text-end text-sm text-gray-900 rounded hover:bg-companyOrange hover:underline lg:hover:bg-transparent dark:text-white">CheckUpdate Awards</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}

export default Navbar