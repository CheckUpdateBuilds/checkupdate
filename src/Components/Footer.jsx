// import React from 'react'
import companyLogo from '../assets/logo2.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { MdArrowUpward } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    
        <div className="bg-black h-[700px] lg:h-96 font-Nunito">
          <div className="pt-6 pl-0 lg:pt-6 lg:pl-9 flex justify-between">
            <Link to={'/'} ><img className="w-[100px] " src={companyLogo} alt="CheckUpdate Logo" /></Link>
            <a className="flex text-white underline" href="#">Back to top <MdArrowUpward className="w-6 h-6"/> </a>
          </div>

          <div className="text-white underline text-right">
          </div>

          <section className="text-white font-Nunito block lg:flex mt-4 justify-between p-1 ">
            <div className="text-left p-2">
              <p className="text-xl font-bold p-1 text-center">Our Company</p>

              <div className="text-sm text-center">
                <Link className="pr-3" to={'#'} >About Us</Link>
                <Link to={'#'} >Privacy Policy</Link>
              </div>
              
              <div className="text-sm text-center">
                <Link to={'#'} className="pr-3" >Help & Support</Link>
                <Link to={'#'}  >Terms of Service</Link>
              </div>

              <div className="text-sm text-center">
                <Link to={'#'} className="pr-3" >Contact Us</Link>
                <Link to={'#'} >Vacancy</Link>
              </div>
            
            </div>

            <div className="items-center mt-12 lg:mt-0 ">
              <div className="text-xl font-bold p-1 text-center">Category</div>

              <div className="block text-center lg:flex">
                <Link to={'/'} className="pr-3 mx-auto " >News</Link>
                <Link to={'/education'} className="pr-3 mx-auto" >Education</Link>
                <Link to={'/business'} className="pr-3 mx-auto " >Business</Link>
                <Link to={'/earth'} className="" >Earth & Wildlife</Link>
              </div>

              <div className="text-center block lg:flex mt-2">
                <Link to={'/sports'} className="pr-3 mx-auto" >Sports</Link>
                <Link to={'/lifestyle'} className="pr-3 mx-auto" >Lifestyle</Link>
                <Link to={'/science'} className="pr-3 mx-auto" >Science & Tech</Link>
                <Link to={'/opportunities'} className="mx-auto" >Opportunities</Link>
              </div>
              
              <div className="text-center block lg:flex mt-2">
                <Link to={'/entertainment'} className="pr-3" >Entertainment</Link>
                <Link to={'/politics'} className=" mr-2" >Politics</Link>
                <Link to={'/culture'} className="mr-2" >Culture & Religion</Link>
                <Link to={'/awards'} className="" >CheckUpdate Awards</Link>
              </div>
            </div>

            <div className="text-right mt-10 lg:mt-0 mr-0 lg:mr-20">
              <div className="text-xl font-bold p-1 text-center">Our Socials</div>
              <div className="text-center">Connect with us on our social media <br className="hidden lg:block" /> platforms to enhance your experience</div>
              <div className="flex justify-center pt-3">
                <div className="bg-white m-1 rounded-full h-6 w-6">
                  <a href="https://x.com" target="_blank">
                    <FaXTwitter className="w-6 h-6 text-black" />
                  </a>
                </div>
                <div className="bg-white m-1 w-6 h-6 rounded-full">
                  <a href="https://instagram.com/checkupdate.ng" target="_blank">
                    <FaInstagram className="w-6 h-6 text-black" />
                  </a>
                </div>
                <div className="bg-white m-1 w-6 h-6 rounded-full">
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebookF className="w-6 h-6 text-black" />
                  </a>
                </div>
                <div className="bg-white m-1 w-6 h-6 rounded-full">
                  <a href="https://www.linkedin.com/company/checkupdate-ng/" target="_blank">
                    <FaLinkedin className="w-6 h-6 text-black" />
                  </a>
                </div>
                <div className="bg-white m-1 w-6 h-6 rounded-full">
                  <a href="https://youtube.com" target="_blank">
                    <FaYoutube className="w-6 h-6 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="text-white text-center mt-20">
            <FontAwesomeIcon icon={faCopyright} />
             CheckUpdate 2024
          </div>

          
        </div>
    
    
    </>
  )
}

export default Footer