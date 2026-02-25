import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";


const HowItWorks = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-[#03373D] font-bold text-3xl mb-5'>How it Works</h1>

     <div className='grid grid-cols-4 gap-6'>
       <div className='bg-gray-200 p-4 rounded-lg text-black '>
       <CiDeliveryTruck />
       <h3 className='text-[#03373D] font-bold my-2'>Booking Pick & Drop</h3>
       <p className='text-sm'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-gray-200 p-4 rounded-lg text-black '>
       <CiDeliveryTruck />
       <h3 className='text-[#03373D] font-bold my-2'>Cash On Delivery</h3>
       <p className='text-sm'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-gray-200 p-4 rounded-lg text-black '>
       <CiDeliveryTruck />
       <h3 className='text-[#03373D] font-bold my-2'>Delivery Hub</h3>
       <p className='text-sm'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-gray-200 p-4 rounded-lg text-black  '>
       <CiDeliveryTruck />
       <h3 className='text-[#03373D] font-bold my-2'>Booking SME & Corporate</h3>
       <p className='text-sm'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
     </div>
    </div>
  );
};

export default HowItWorks;