'use client';

import React from 'react';
import styles from '../../../(styles)/mainPage/HeroSection.module.scss';
import { Button } from '../../UI/Button';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const Hero = ({ dict }) => {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          bulletClass: `${styles.bullet}`,
          bulletActiveClass: `${styles.bullet_act}`,
          clickable: true,
        }}
        spaceBetween={50}
        autoplay={{
          delay: 3500,
          speed: 100,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide className={styles.hero_slide}>
          {/* <div className={styles.hero_backgroundImg}></div> */}
          <img
            src="/media/pictures/hero-picture.jpg"
            alt="hall of mall"
            className={styles.Img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero_slide}>
          <img
            src="/media/pictures/hero-picture.jpg"
            alt="hall of mall"
            className={styles.Img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero_slide}>
          <img
            src="/media/pictures/hero-picture.jpg"
            alt="hall of mall"
            className={styles.Img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero_slide}>
          <img
            src="/media/pictures/hero-picture.jpg"
            alt="hall of mall"
            className={styles.Img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.hero_slide}>
          <img
            src="/media/pictures/hero-picture.jpg"
            alt="hall of mall"
            className={styles.Img}
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.hero_wrapper}>
        <h1 className={styles.hero_title}>{dict.mainPage.hero.title}</h1>
        <Button type={'button'} text={dict.mainPage.hero.button} />
      </div>
    </section>
  );
};
