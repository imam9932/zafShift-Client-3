import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Parcel from '../Parcel/Parcel';
import BeAMerchant from '../BeAMerchant/BeAMerchant';

const reviewsPromise=fetch('/reviews.json')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <OurServices></OurServices>
        <Brands></Brands>
        <Parcel></Parcel>
        <BeAMerchant></BeAMerchant>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;