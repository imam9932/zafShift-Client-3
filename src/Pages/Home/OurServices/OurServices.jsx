import React from 'react';
import img from '../../../assets/service.png'

const OurServices = () => {
  return (
    <div className='bg-secondary text-white mt-10 py-5'>
      <h1 className='text-2xl flex justify-center items-center my-2 font-bold '>Our Services</h1>
      <p className='text-sm flex justify-center items-center '>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

      <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto py-5'>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Express & Standard Delivery</h1>
          <p className='text-sm text-gray-600 px-5 '>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Nationwide Delivery</h1>
          <p className='text-sm text-gray-600 px-5 '>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
        </div>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Fulfillment Solution</h1>
          <p className='text-sm text-gray-600 px-5 '>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
        </div>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Cash on Home Delivery</h1>
          <p className='text-sm text-gray-600 px-5 '>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
        </div>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Corporate Service / Contract In Logistics</h1>
          <p className='text-sm text-gray-600 px-5 '>Customized corporate services which includes warehouse and inventory management support.</p>
        </div>
        <div className='bg-white text-black py-5 px-10 rounded-lg mt-5 '>
          <div className='flex justify-center items-center'>
            <img  src= {img} alt="" />
          </div>
          <h1 className='text-secondary font-bold my-2 flex justify-center items-center  '>Parcel Return</h1>
          <p className='text-sm text-gray-600 px-5 '>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;