// import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import companyLogo from '../assets/logo2.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBarsProgress, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="font-Nunito bg-companyRed h-[350px] w-full">
        <div className="sm:block md:flex justify-between">
          <Link to={'/'} >
            <img src={companyLogo} alt="company logo" className="h-[200px] w-[200px] pl-10 -mt-10"/>
          </Link>

          <div className='pl-10 md:pl-0 md:block lg:ml-[500px] md:ml-[100px] pointer-events-auto inset-y-0 bg-transparent text-white -mt-5 md:mt-5 lg:mt-5'>
              <MdOutlineSearch className=' h-10 w-10 absolute pl-1 pt-[12px]'/>
              <input type="text" placeholder='Search' className='inline-block lg:-mr-20 md:-mr-6 pl-10 h-12 lg:w-[400px] md:w-[300px] bg-transparent ring-companyWhite ring-1 ring-inset rounded-3xl'/>
          </div>
          <button className='ml-20 mt-2 lg:mt-10 md:ml-0 bg-companyWhite text-center w-28 h-12 text-companyRed rounded-3xl'>Sign In</button>
        </div>

      </div>
          

      <nav className=" -mt-0 md:-mt-56">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto -pt-2">
          
          <div className="hidden w-full md:block md:w-auto text-sm" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link to={'/'} className="block py-2 px-1 md:p-0 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:dark:text-red-700 dark:bg-red-600 md:dark:bg-transparent">News</Link>
              </li>
              <li>
                <Link to={'/sports'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Sports</Link>
              </li>
              <li>
                <Link to={'/entertainment'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Entertainment</Link>
              </li>
              <li>
                <Link to={'/lifestyle'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Lifestyle</Link>
              </li>
              <li>
                <Link to={'/politics'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Politics</Link>
              </li>
              <li>
                <Link to={'/business'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Business</Link>
              </li>
              <li>
                <Link to={'/science'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Science & Tech</Link>
              </li>
              <li>
                <Link to={'/culture'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Culture & Religion</Link>
              </li>
              <li>
                <Link to={'/earth'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Earth & Wildlife</Link>
              </li>
              <li>
                <Link to={'/opportunities'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Opportunities</Link>
              </li>
              <li>
                <Link to={'/awards'} className="block py-2 px-1 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >CheckUpdate Awards</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar