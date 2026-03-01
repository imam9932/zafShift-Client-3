import React from 'react';
import img1 from '../../../assets/location-merchant.png'
import img2 from '../../../assets/be-a-merchant-bg.png'


const BeAMerchant = () => {
  return (
    <div className='bg-secondary w-10/12 mx-auto rounded-xl text-white  p-5'>
      <img className='-mt-5' src={img2} alt="" />
    <div className='flex justify-center items-center'>
       <div>
       <h2 className='text-2xl font-bold'>Merchant & Customer Satisfaction is Our First Priority</h2>
      <p className='text-sm my-2'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>

      <div className='flex gap-5 mt-5'>
        <button className='bg-primary text-black py-1 px-3 rounded-2xl font-bold'>Become a Merchant</button>
        <button className=' text-primary border-1 py-1 px-3 rounded-2xl'>Earn with ZapShift Courier</button>
      </div>
     </div>
     <img src={img1} alt="" />
    </div>
      
    </div>
  );
};

export default BeAMerchant;