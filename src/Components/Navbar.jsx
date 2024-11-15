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
      <div className="font-Nunito bg-companyRed h-auto w-full">
        <div className="flex flex-wrap justify-between items-center p-4">
          <Link to={'/'}>
            <img src={companyLogo} alt="company logo" className="h-20 w-20"/>
          </Link>

          <div className='relative flex-1 mx-4'>
              <MdOutlineSearch className='absolute top-1/2 transform -translate-y-1/2 left-3 h-6 w-6 text-white'/>
              <input type="text" placeholder='Search' className='w-full pl-10 pr-4 py-2 h-10 bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl text-white'/>
          </div>
          <button className='bg-companyWhite text-center w-28 h-10 text-companyRed rounded-3xl'>Sign In</button>
        </div>
      

        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:hover:bg-red-700 dark:focus:ring-black" aria-controls="navbar-solid-bg" aria-expanded={isOpen} onClick={toggle} >
              <BiMenuAltLeft className="h-6 w-6"/>
            </button>
            <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <Link to={'/'} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-red-700">News</Link>
                </li>
                <li>
                  <Link to={'/sports'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Sports</Link>
                </li>
                <li>
                  <Link to={'/entertainment'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Entertainment</Link>
                </li>
                <li>
                  <Link to={'/lifestyle'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Lifestyle</Link>
                </li>
                <li>
                  <Link to={'/politics'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Politics</Link>
                </li>
                <li>
                  <Link to={'/business'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Business</Link>
                </li>
                <li>
                  <Link to={'/science'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Science & Tech</Link>
                </li>
                <li>
                  <Link to={'/culture'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Culture & Religion</Link>
                </li>
                <li>
                  <Link to={'/earth'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Earth & Wildlife</Link>
                </li>
                <li>
                  <Link to={'/opportunities'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">Opportunities</Link>
                </li>
                <li>
                  <Link to={'/awards'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700">CheckUpdate Awards</Link>
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