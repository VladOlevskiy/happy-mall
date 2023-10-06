'use client';
import styles from '../../../(styles)/mainPage/NewSection.module.scss';
import stylesContainer from '../../../(styles)/container.module.scss';
import React, { useState } from 'react';
import NewList from './NewList';

export const New = ({ lang, dict }) => {
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState('fashion');
  const foo = name => {
    setFilter('');
    setShow(false);
    if (name === filter) {
      setFilter('');
      setShow(false);
    } else {
      setFilter(name);
      setShow(prev => !prev);
    }
  };
  return (
    <section className={styles.newSection}>
      <div className={stylesContainer.container}>
        <h2 className={styles.newSection_titleFirst}>
          {dict.mainPage.new.title}
        </h2>
        <div className={styles.newSection_line} />
        <ul className={styles.newSection_menuList}>
          <li className={styles.newSection_menuItem}>
            <div className={styles.newSection_menuItem_wrapper}>
              <div className={styles.newSection_icon} />

              <button
                className={styles.newSection_menuItem_button}
                onClick={() => foo('fashion')}
              >
                {dict.mainPage.new.menu.fashion}
              </button>
              <img
                className={styles.newSection_menuItem_arrow}
                src="/media/icons/arrow-bottom.png"
                style={
                  filter === 'fashion' && show
                    ? { transform: 'rotate(-90deg)' }
                    : { transform: 'rotate(0deg)' }
                }
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {filter === 'fashion' && show && (
              <div>
                <NewList lang={lang} dic={dict} />
              </div>
            )}
          </li>
          <li className={styles.newSection_menuItem}>
            <div className={styles.newSection_menuItem_wrapper}>
              <div className={styles.newSection_icon} />
              <button
                className={styles.newSection_menuItem_button}
                onClick={() => foo('home')}
              >
                {dict.mainPage.new.menu.home}
              </button>
              <img
                className={styles.newSection_menuItem_arrow}
                src="/media/icons/arrow-bottom.png"
                style={
                  filter === 'home' && show
                    ? { transform: 'rotate(-90deg)' }
                    : { transform: 'rotate(0deg)' }
                }
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {filter === 'home' && show && (
              <div>
                <NewList lang={lang} dic={dict} />
              </div>
            )}
          </li>
          <li className={styles.newSection_menuItem}>
            <div className={styles.newSection_menuItem_wrapper}>
              <div className={styles.newSection_icon} />
              <button
                className={styles.newSection_menuItem_button}
                onClick={() => foo('beauty')}
              >
                {dict.mainPage.new.menu.beauty}
              </button>
              <img
                className={styles.newSection_menuItem_arrow}
                src="/media/icons/arrow-bottom.png"
                style={
                  filter === 'beauty' && show
                    ? { transform: 'rotate(-90deg)' }
                    : { transform: 'rotate(0deg)' }
                }
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {filter === 'beauty' && show && (
              <div>
                <NewList lang={lang} dic={dict} />
              </div>
            )}
          </li>
          <li className={styles.newSection_menuItem}>
            <div className={styles.newSection_menuItem_wrapper}>
              <div className={styles.newSection_icon} />
              <button
                className={styles.newSection_menuItem_button}
                onClick={() => foo('rest')}
              >
                {dict.mainPage.new.menu.rest}
              </button>
              <img
                className={styles.newSection_menuItem_arrow}
                src="/media/icons/arrow-bottom.png"
                style={
                  filter === 'rest' && show
                    ? { transform: 'rotate(-90deg)' }
                    : { transform: 'rotate(0deg)' }
                }
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {filter === 'rest' && show && (
              <div>
                <NewList lang={lang} dic={dict} />
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};
