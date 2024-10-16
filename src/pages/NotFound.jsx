// import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh'}}>
      <h1>Page Not Found!</h1>
      <Link to={'/'} style={{textDecoration: 'none', color: 'black' }}>
        <button className='btn btn-outline-danger'>Go back to Home</button>
      </Link>
    </div>
  )
}

export default NotFound