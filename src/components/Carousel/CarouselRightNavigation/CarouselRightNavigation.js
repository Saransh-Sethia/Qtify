import React,{useEffect, useState} from 'react';
import {useSwiper, useSwiperSlide } from 'swiper/react';
import styles from './CarouselRightNavigation.css';
import { ReactComponent as RightArrow } from '../../../assets/right-arrow.svg';


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.isEnding);
    useEffect(()=>{
swiper.on("slideChange",function(){
    setIsEnding(swiper.isEnding);
})
    },[])
  return (
    <div className={styles.rightNavigation}>
      {!isEnding && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation