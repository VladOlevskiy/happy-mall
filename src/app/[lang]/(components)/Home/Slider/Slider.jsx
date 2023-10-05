'use client';

import React, { useState } from 'react';
import styles from '../../../(styles)/mainPage/SliderSection.module.scss';
import stylesContainer from '../../../(styles)/container.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import '../../../(styles)/mainPage/SliderSection.module.scss';

const Slider = ({ dict }) => {
  const [my_swiper, set_my_swiper] = useState({});
  const [filter, setFilter] = useState('karting');

  const handleFilter = type => {
    setFilter(type);
  };

  const nextImg = () => {
    my_swiper.slideNext();
  };
  const prevImg = () => {
    my_swiper.slidePrev();
  };
  return (
    <section className={styles.sliderSection}>
      <div className={stylesContainer.container}>
        <div className={styles.sliderSection_titleWrapper}>
          <img
            src="/media/pictures/sliderImg.png"
            width={315}
            height={80.5}
            alt="adventica text"
          />
          <h2 className={styles.sliderSection_title}>
            {dict.mainPage.slider.title}
          </h2>
        </div>
        <div className={styles.sliderSection_listWrapper}>
          <ul className={styles.sliderSection_FilterList}>
            <li className={styles.sliderSection_FilterItem}>
              <button
                type="button"
                onClick={() => handleFilter('karting')}
                className={styles.sliderSection_FilterButton}
              >
                {dict.mainPage.slider.filters.karting}
                {filter === 'karting' && <div className={styles.active} />}
              </button>
              <div className={styles.dimond} />
            </li>
            <li className={styles.sliderSection_FilterItem}>
              <button
                type="button"
                onClick={() => handleFilter('trampolines')}
                className={styles.sliderSection_FilterButton}
              >
                {dict.mainPage.slider.filters.trampolines}
                {filter === 'trampolines' && <div className={styles.active} />}
              </button>
              <div className={styles.dimond} />
            </li>
            <li className={styles.sliderSection_FilterItem}>
              <button
                type="button"
                onClick={() => handleFilter('gameRooms')}
                className={styles.sliderSection_FilterButton}
              >
                {dict.mainPage.slider.filters.gameRooms}
                {filter === 'gameRooms' && <div className={styles.active} />}
              </button>
              <div className={styles.dimond} />
            </li>
            <li className={styles.sliderSection_FilterItem}>
              <button
                type="button"
                onClick={() => handleFilter('attractions')}
                className={styles.sliderSection_FilterButton}
              >
                {dict.mainPage.slider.filters.attractions}
                {filter === 'attractions' && <div className={styles.active} />}
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.sliderSection_sliderWrapper}>
          {filter === 'karting' && (
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              loop="true"
              className={styles.sliderSection_swiper}
              modules={[Pagination, EffectCoverflow]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.75,
              }}
              centerInsufficientSlides="true"
              centered="true"
              auto="true"
              centeredSlides="true"
              scrollbar={{ draggable: true }}
              effect="coverflow"
              spaceBetween={0}
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <div className={styles.sliderSection_wrapperText}>
                <h3 className={styles.sliderSection_wrapperText_title}>
                  {dict.mainPage.slider.filters.karting}
                </h3>
                <div className={styles.line} />
                <p className={styles.sliderSection_wrapperText_text}>
                  {dict.mainPage.slider.text}
                </p>
              </div>
              <div className={styles.sliderSection_wrapperButtonPrev}>
                <button
                  className={styles.sliderSection_wrapperButtonPrev_buttonPrev}
                  onClick={prevImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonPrev_iconLeft}
                    src="/media/icons/arrowLeftSlider.png"
                    alt="icon arrow"
                  />
                </button>
              </div>
              <div className={styles.sliderSection_wrapperButtonNext}>
                <button
                  className={styles.sliderSection_wrapperButtonNext_buttonNext}
                  onClick={nextImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonNext_iconRight}
                    src="/media/icons/arrowRightSlider.png"
                    alt="icon arrow"
                  />
                </button>
              </div>
            </Swiper>
          )}
          {filter === 'trampolines' && (
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              loop="true"
              className={styles.sliderSection_swiper}
              modules={[Pagination, EffectCoverflow]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.75,
              }}
              centerInsufficientSlides="true"
              centered="true"
              auto="true"
              centeredSlides="true"
              scrollbar={{ draggable: true }}
              effect="coverflow"
              spaceBetween={0}
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <div className={styles.sliderSection_wrapperText}>
                <h3 className={styles.sliderSection_wrapperText_title}>
                  {dict.mainPage.slider.filters.trampolines}
                </h3>
                <div className={styles.line} />
                <p className={styles.sliderSection_wrapperText_text}>
                  {dict.mainPage.slider.text}
                </p>
              </div>
              <div className={styles.sliderSection_wrapperButtonPrev}>
                <button
                  className={styles.sliderSection_wrapperButtonPrev_buttonPrev}
                  onClick={prevImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonPrev_iconLeft}
                    src="/media/icons/arrowLeftSlider.png"
                    alt="icon"
                  />
                </button>
              </div>
              <div className={styles.sliderSection_wrapperButtonNext}>
                <button
                  className={styles.sliderSection_wrapperButtonNext_buttonNext}
                  onClick={nextImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonNext_iconRight}
                    src="/media/icons/arrowRightSlider.png"
                    alt="icon"
                  />
                </button>
              </div>
            </Swiper>
          )}
          {filter === 'gameRooms' && (
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              loop="true"
              className={styles.sliderSection_swiper}
              // ref={swiperRef}
              modules={[Pagination, EffectCoverflow]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.75,
              }}
              centerInsufficientSlides="true"
              centered="true"
              auto="true"
              centeredSlides="true"
              scrollbar={{ draggable: true }}
              effect="coverflow"
              spaceBetween={0}
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <div className={styles.sliderSection_wrapperText}>
                <h3 className={styles.sliderSection_wrapperText_title}>
                  {dict.mainPage.slider.filters.gameRooms}
                </h3>
                <div className={styles.line} />
                <p className={styles.sliderSection_wrapperText_text}>
                  {dict.mainPage.slider.text}
                </p>
              </div>
              <div className={styles.sliderSection_wrapperButtonPrev}>
                <button
                  className={styles.sliderSection_wrapperButtonPrev_buttonPrev}
                  onClick={prevImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonPrev_iconLeft}
                    src="/media/icons/arrowLeftSlider.png"
                    alt="kid on the kid car"
                  />
                </button>
              </div>
              <div className={styles.sliderSection_wrapperButtonNext}>
                <button
                  className={styles.sliderSection_wrapperButtonNext_buttonNext}
                  onClick={nextImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonNext_iconRight}
                    src="/media/icons/arrowRightSlider.png"
                    alt="kid on the kid car"
                  />
                </button>
              </div>
            </Swiper>
          )}
          {filter === 'attractions' && (
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              loop="true"
              className={styles.sliderSection_swiper}
              // ref={swiperRef}
              modules={[Pagination, EffectCoverflow]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.75,
              }}
              centerInsufficientSlides="true"
              centered="true"
              auto="true"
              centeredSlides="true"
              scrollbar={{ draggable: true }}
              effect="coverflow"
              spaceBetween={0}
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture1.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.sliderSection_swiper_swiperSlide}>
                <div
                  className={styles.sliderSection_swiper_swiperSlide_wrapperImg}
                >
                  <img
                    className={
                      styles.sliderSection_swiper_swiperSlide_wrapperImg_img
                    }
                    src="/media/pictures/sliderPicture2.jpg"
                    alt="kid on the kid car"
                  />
                </div>
              </SwiperSlide>
              <div className={styles.sliderSection_wrapperText}>
                <h3 className={styles.sliderSection_wrapperText_title}>
                  {dict.mainPage.slider.filters.attractions}
                </h3>
                <div className={styles.line} />
                <p className={styles.sliderSection_wrapperText_text}>
                  {dict.mainPage.slider.text}
                </p>
              </div>
              <div className={styles.sliderSection_wrapperButtonPrev}>
                <button
                  className={styles.sliderSection_wrapperButtonPrev_buttonPrev}
                  onClick={prevImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonPrev_iconLeft}
                    src="/media/icons/arrowLeftSlider.png"
                    alt="icon"
                  />
                </button>
              </div>
              <div className={styles.sliderSection_wrapperButtonNext}>
                <button
                  className={styles.sliderSection_wrapperButtonNext_buttonNext}
                  onClick={nextImg}
                >
                  <img
                    className={styles.sliderSection_wrapperButtonNext_iconRight}
                    src="/media/icons/arrowRightSlider.png"
                    alt="icon"
                  />
                </button>
              </div>
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
