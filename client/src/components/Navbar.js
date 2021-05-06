import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" to="/login" tabindex="-1" aria-disabled="true">Login</NavLink>
        </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/signup" tabindex="-1" aria-disabled="true">Registration</NavLink>
        </li>
      
      </ul>
      
    </div>
</nav>
        </>
    )
}

export default Navbar;