import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";

const Button = () => {
  return (
    <div className='flex gap-5 -mt-10'>
      <button className='bg-[#CAEB66] py-1 px-2 rounded-xl text-black font-bold flex gap-2'>Track Your Parcel <FaLocationArrow /></button>
      <button className='bg-gray-200 py-1 px-2 rounded-lg text-black font-bold'>Be A Rider</button>
    </div>
  );
};

export default Button;