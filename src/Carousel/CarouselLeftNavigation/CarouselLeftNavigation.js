import React,{useEffect, useState} from 'react';
import {useSwiper} from 'swiper';
import styles from '../Carousel.css';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.png';


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    useEffect(()=>{
swiper.on("sliderChange",()=>{
    setIsBeginning(swiper.isBeginning());
})
    },[])
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation
