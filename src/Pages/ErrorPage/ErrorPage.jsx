import React from 'react';
import img1  from '../../assets/error.png'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <img src={img1} alt="" />
      <Link className='bg-primary py-1 px-3 rounded-lg font-bold' to='/'>Go Home</Link>
    </div>
  );
};

export default ErrorPage;