import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';

const Reviews = ({reviewsPromise}) => {
  const reviews=use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <div>
        <h3> Review</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum excepturi sit nisi similique dignissimos. Consequatur corrupti earum reprehenderit dolorum enim aperiam iure consectetur in, voluptas quidem quo neque! Placeat, temporibus.</p>
      </div>
       <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {reviews.map(review=>  <SwiperSlide key={review.id}>
          <ReviewsCard review={review}></ReviewsCard>
        </SwiperSlide>)}
         
        
      </Swiper>
    </>
    </div>
  );
};

export default Reviews;