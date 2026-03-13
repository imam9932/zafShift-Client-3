import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { FaLocationArrow } from "react-icons/fa6";
import UseAuth from '../../../hook/UseAuth';


const Navbar = () => {
  const {user,logOut}=UseAuth();
  console.log(user);

  const handleLogOut=()=>{
    logOut()
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err.message)
    })

  }
  const links=
  <div className='flex gap-5'>
    <NavLink  >Home</NavLink>
    <NavLink  >Home</NavLink>
    <NavLink  to='/about-us'>About</NavLink>
    <NavLink to='/coverage'>Coverage</NavLink>
    <NavLink to='/send-parcel'>Send-Parcel</NavLink>
  </div>
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-5">
    {
      user? <a onClick={handleLogOut} className="btn">Log Out</a>: <Link to='/login' className="btn">Login</Link>
    }
    <Link to='/rider' className="btn">Be a rider <FaLocationArrow />
</Link>
  </div>
</div>
  );
};

export default Navbar;