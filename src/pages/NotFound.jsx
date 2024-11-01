// import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <h1 className='text-center'>Page Not Found!</h1>
      <Link to={'/'} style={{textDecoration: 'none', color: 'black' }}>
        <button className='btn m-5'>Go back Home</button>
      </Link>
    </div>
  )
}

export default NotFound