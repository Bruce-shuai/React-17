import React from 'react';
import { Carousel as AntCarousel, Image } from 'antd';  // 这里的重命名用得很好
import styles from './Carousel.module.css';
import carousel_1 from '../../assets/images/carousel_1.jpg';
import carousel_2 from '../../assets/images/carousel_2.jpg';
import carousel_3 from '../../assets/images/carousel_3.jpg';


export const Carousel: React.FC = () => {
  return <>
    <AntCarousel autoplay>
    <div>
      <Image src={carousel_1} className={styles.img}/>
    </div>
    <div>
      <Image src={carousel_2} className={styles.img}/>
    </div>
    <div>
      <Image src={carousel_3} className={styles.img}/>
    </div>
  </AntCarousel>
  </>
}