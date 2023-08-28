import React from 'react';
import headphoneImage from '../../assets/hero-headphones.png';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading1}>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={headphoneImage}  alt="headphones" width={212} />
      </div>
    </div>
  )
}

export default Hero
