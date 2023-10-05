'use client';

import React, { useRef } from 'react';
import stylesContainer from '../../../(styles)/container.module.scss';
import styles from '../../../(styles)/mainPage/AboutSection.module.scss';
import Link from 'next/link';

export const About = ({ lang, dict }) => {
  const videoRef = useRef();
  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section className={styles.sectionAbout}>
      <div className={stylesContainer.container}>
        <div className={styles.sectionAbout_commonWrapper}>
          <div className={styles.sectionAbout_MainWrapper}>
            <h2 className={styles.sectionAbout_title}>
              {dict.mainPage.about.title}
            </h2>
            <div className={styles.sectionAbout_line}></div>
            <div className={styles.sectionAbout_SecondaryWrapper}>
              <div className={styles.sectionAbout_textWrapper}>
                <p className={styles.sectionAbout_text}>
                  {dict.mainPage.about.text}
                </p>
                <Link
                  href={`/${lang}/about`}
                  className={styles.sectionAbout_link}
                >
                  <img
                    src="/media/icons/map.png"
                    alt="icon"
                    className={styles.sectionAbout_linkImg}
                  />
                  <p>{dict.mainPage.about.link}</p>
                </Link>
              </div>
              <div className={styles.sectionAbout_ImgWrapper}>
                <img
                  src="/media/pictures/about-picture.jpg"
                  alt="mall"
                  className={styles.sectionAbout_img}
                />
              </div>
            </div>
          </div>
          <div className={styles.sectionAbout_wrapperVideo}>
            <video
              className={styles.sectionAbout_video}
              src="/media/video/video.mp4"
              loop
              muted
              poster="/media/pictures/poster-video.jpg"
              ref={videoRef}
            />
            <div />
            <button className={styles.button} onClick={handlePlay}>
              <svg
                fill="none"
                viewBox="0 0 56 57"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
              >
                <g filter="url(#filter0_b_1_1007)">
                  <circle
                    cx="28"
                    cy="28.5864"
                    r="28"
                    fill="#F2F0EA"
                    fillOpacity="0.05"
                  />
                  <circle
                    className={styles.circle1}
                    cx="28"
                    cy="28.5864"
                    r="27.1794"
                    stroke="#FDFCFA"
                    strokeWidth="1.64124"
                  />
                </g>
                <path
                  d="M36 28.5864L24 35.5146L24 21.6582L36 28.5864Z"
                  fill="#FDFCFA"
                />
                <defs>
                  <filter
                    id="filter0_b_1_1007"
                    x="-16"
                    y="-15.4136"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1_1007"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1_1007"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
