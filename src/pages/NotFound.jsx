import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <h1>Page Not Found!</h1>
      <Link to={'/'}>
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound