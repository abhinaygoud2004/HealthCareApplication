import React from 'react'
import "./Navbar.css"
import { loginContext } from '../../contexts/loginContext'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
function Navbar() {
  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
  const activeLink={
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  const inactiveLink={
    fontSize:"1.2rem"
  }
  return (
    <div><nav className="navbar navbar-expand-lg navbar">
    <div className="container-fluid">
      <h4>ProDoc..</h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse right" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link text-dark" aria-current="page" to="/" style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
          }}>Home</NavLink>
          </li>
          {userLoginStatus?
         <li className="nav-item">
          <NavLink className="nav-link " aria-current="page"
          style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
          }} to="/user-profile" >
            userProfile</NavLink>
        </li>
        :
        <li className="nav-item">
         <NavLink className="nav-link " aria-current="page"
          style={({isActive})=>{
       return isActive?activeLink:inactiveLink;
       }} to="/register">Register</NavLink>
      </li>
     }
          {userLoginStatus?
         <li className="nav-item">
          <NavLink className="nav-link " aria-current="page"
          style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
          }} to="/Login" onClick={logoutUser}>
            Logout</NavLink>
        </li>
        :
        <li className="nav-item">
         <NavLink className="nav-link " aria-current="page"
          style={({isActive})=>{
       return isActive?activeLink:inactiveLink;
       }} to="/Login">Login</NavLink>
      </li>
     }
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar