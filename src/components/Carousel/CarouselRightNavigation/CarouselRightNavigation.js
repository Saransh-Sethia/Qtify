import React,{useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';
import styles from '../Carousel.css';
import { ReactComponent as RightArrow } from '../../../assets/right-arrow';


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.isEnding);
    useEffect(()=>{
swiper.on("sliderChange",()=>{
    setIsEnding(swiper.isEnding());
})
    },[])
  return (
    <div className={styles.rightNavigation}>
      {!isEnding && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation