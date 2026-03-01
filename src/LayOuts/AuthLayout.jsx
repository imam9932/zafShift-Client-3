import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div>
      <Logo></Logo>
      <div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div>
        <img src={authImg} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;