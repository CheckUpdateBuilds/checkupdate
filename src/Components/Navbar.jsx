import React from 'react'

const Navbar = () => {
  return (
    <>

<div class="header py-2">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo d-flex align-items-center">
                <img src="https://storage.googleapis.com/a1aa/image/qFiNSkIk09rsCNtVmTH8qXv2NuL2aBETxxnZ8KLvzCk2kx5E.jpg" alt="Check Update Logo">
                <span>Check Update</span>
            </div>
            <div class="search-signin d-flex align-items-center">
                <input type="text" class="form-control mr-2" placeholder="Search">
                <button class="btn btn-light">Sign in</button>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Education</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Lifestyle</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Politics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Science & Tech</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Culture & Religion</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Earth & Wildlife</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Opportunities</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">CheckUpdate Awards</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar