import React,{useEffect} from 'react';
import   {Swiper, useSwiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './Carousel.css';
import { Navigation } from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({data}) => {
const swiper = useSwiper();

useEffect(()=>{
    swiper.slideTo(0)
},[data]);
return <></>;
}

const Carousel = ({data, renderCardComponent}) => {
  return (
    <div clasName={styles.wrapper}>
      <Swiper 
      initialSlide={0} 
      modules={Navigation} 
      slidesPerView={"auto"} 
      spaceBetween={40}
      allowTouchMove>
<Controls data={data}/>
<CarouselLeftNavigation />
<CarouselRightNavigation />
{data.map((item)=>{
    <SwiperSlide>
{renderCardComponent(item)}
    </SwiperSlide>
})}
      </Swiper>
    </div>
  )
} 

export default Carousel
