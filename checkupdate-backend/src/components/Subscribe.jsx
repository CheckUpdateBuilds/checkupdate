'use client'
import { useRef, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const Subscribe = () => {
  const emailRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    localStorage.setItem("userEmail", email);
    setSuccessMessage("Thank you for subscribing!");
    
    setTimeout(() => {
      setSuccessMessage('');
      emailRef.current.value = '';
    }, 2000);
  }

  return (
    <>
      <div className="text-center bg-companyLightRed rounded-3xl">
        <div className="p-3 mt-5 font-bold text-3xl">Subscribe To Our Newsletter!</div>
        <div className="text-lg text-center px-2 ">Get first hand news directly in your inbox and be the first to know about new features when they drop.</div>
        <div className="p-5 m-5 text-center rounded-t-3xl bg-companyWhite">
          <input ref={emailRef} className="block w-full border-0 ring-1 h-[50px] rounded-full text-black bg-companyWhite ring-inset ring-black sm:text-sm/6 hover:shadow-md px-7" type="text" placeholder="@example.com" />
          <button className="bg-companyRed hover:bg-red-700 text-center w-[150px] h-[67px] mt-6 text-white rounded-full hover:text-black" onClick={handleEmailSubmit}>
            Subscribe <MdOutlineArrowOutward className="inline-block h-6 w-6 mr-2" />
          </button>
          {successMessage && <div className="mt-4 text-companyRed">{successMessage}</div>}
        </div>
      </div>
    </>
  )
}

export default Subscribe;