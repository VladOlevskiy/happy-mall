import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../../../(styles)/mainPage/NewSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewList = ({ dic, lang }) => {
  const swiperRef = useRef();
  const [my_swiper, set_my_swiper] = useState({});
  const [filter, setFilter] = useState('clothes');

  const handleFilter = type => {
    setFilter(type);
  };

  const changeImg = () => {
    my_swiper.slideNext();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <ul className={styles.NavList}>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('clothes')}
              style={{
                backgroundColor:
                  filter === 'clothes' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.clothes}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('babyCloth')}
              style={{
                backgroundColor:
                  filter === 'babyCloth' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.babyCloth}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('shoes')}
              style={{
                backgroundColor: filter === 'shoes' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.shoes}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('babyShoes')}
              style={{
                backgroundColor:
                  filter === 'babyShoes' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.babyShoes}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('underwear')}
              style={{
                backgroundColor:
                  filter === 'underwear' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.underwear}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('sport')}
              style={{
                backgroundColor: filter === 'sport' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.sport}
            </button>
          </li>
          <li className={styles.NavList_item}>
            <button
              className={styles.NavList_button}
              onClick={() => handleFilter('bags')}
              style={{
                backgroundColor: filter === 'bags' ? '#C6A687' : 'transparent',
              }}
            >
              {dic.mainPage.new.subMenu.bags}
            </button>
          </li>
        </ul>
        <Link href={`/${lang}/shops`} className={styles.newSection_link}>
          <img
            src="/media/icons/map.png"
            alt="icon"
            className={styles.newSection_linkImg}
          />
          <p>{dic.mainPage.new.menu.link}</p>
        </Link>
      </div>
      {filter === 'clothes' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>jil sander</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>zara</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>karl lagerfeld</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>zara</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>jil sander</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>zara</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>karl lagerfeld</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'babyCloth' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 1</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 2</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 3</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 4</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 5</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 6</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>kid brand 6</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'shoes' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 1</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 2</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 3</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 4</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 5</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 6</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>shoes brand 7</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'babyShoes' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 1
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 2
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 3
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 4
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 5
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 6
                  </h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>
                    baby shoes brand 7
                  </h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'underwear' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 1</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 2</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 3</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 4</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 5</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 6</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>underwear brand 7</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'sport' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 1</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 2</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 3</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 4</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 5</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 6</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>sport brand 7</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      {filter === 'bags' && (
        <div className={styles.newSection_mainWrapper}>
          <div className={styles.newSection_SwiperWrapper}>
            <Swiper
              onInit={ev => {
                set_my_swiper(ev);
              }}
              ref={swiperRef}
              modules={[]}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3}
              loop="true"
              breakpoints={{
                1920: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 0,
                  slidesPerView: 5,
                },
                768: {
                  spaceBetween: 0,
                  slidesPerView: 3,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 1</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 2</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 3</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 4</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-zara.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 5</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-karl-lagerfeld.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 6</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href={`/${lang}/shops`}
                  className={styles.newSection_shopLink}
                >
                  <div className={styles.newSection_shopLink_wrapper}>
                    <img
                      src="/media/pictures/brand-jil-sander.jpg"
                      className={styles.newSection_SwiperImg}
                      alt="women model"
                    />
                  </div>
                  <h3 className={styles.newSection_title}>bags brand 7</h3>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <button
            onClick={changeImg}
            className={styles.newSection_SwiperNextBtn}
          >
            <img
              className={styles.newSection_SwiperIconNext}
              src="/media/icons/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default NewList;
