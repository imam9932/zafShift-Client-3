import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/banner/banner1.png'
import img2 from '../../../assets/banner/banner2.png'
import img3 from '../../../assets/banner/banner3.png'
 
import { FaLocationArrow } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    >
      <div>
        <img src= {img1} />
         
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src= {img2} />
          
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src= {img3} />
         
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
     <div className='flex gap-5 -mt-53 absolute left-21'>
          <button className='bg-[#CAEB66] py-1 px-2 rounded-xl text-black font-bold flex gap-2'>Track Your Parcel <FaLocationArrow /></button>
          <button className='bg-gray-200 py-1 px-2 rounded-lg text-black font-bold'>Be A Rider</button>
        </div>
    </div>
    
  );
};

export default Banner;