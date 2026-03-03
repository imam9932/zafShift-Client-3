import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div className='w-7/12 mx-auto mt-5'>
      <Logo></Logo>
      <div className='flex'>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
         <div className='flex-1'>
        <img src={authImg} alt="" />
      </div>
      </div>
     
    </div>
  );
};

export default AuthLayout;