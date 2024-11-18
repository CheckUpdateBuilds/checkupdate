import { Link } from "react-router-dom"

// import React from 'react'

const InnerNavbar = () => {
  return (
    <>
        <div className="font-Nunito bg-companyWhite w-full h-[50px] text-center ">
            <ul className="flex text-center justify-evenly">
                <li><Link to={'#'} >News</Link></li>
                <li><Link to={'#'} >Sports</Link></li>
                <li><Link to={'#'} >Live</Link></li>
            </ul>
        </div>
    
    
    
    </>
  )
}

export default InnerNavbar