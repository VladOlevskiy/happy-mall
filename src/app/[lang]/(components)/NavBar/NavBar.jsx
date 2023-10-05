'use client';

import React, { useEffect } from 'react';
import Logo from './Logo';
import styles from '../../(styles)/NavBar.module.scss';
import containerStyle from '../../(styles)/container.module.scss';
import Link from 'next/link';
import NavigationList from './NavigationList';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const NavBar = ({ lang, dict }) => {
  const router = useRouter();

  const [showMobMenu, setShowMobMenu] = useState(false);
  const pathname = usePathname();

  const blockScroll = () => {
    if (!showMobMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleChange = e => {
    const la = e.target.value;

    router.push(`/${la}`);
  };

  const handleShowMobMenu = () => {
    setShowMobMenu(prev => !prev);
    blockScroll();
  };

  useEffect(() => {
    if (showMobMenu) {
      setShowMobMenu(false);
      blockScroll();
    }
  }, [pathname]);

  return (
    <section className={styles.section}>
      <div className={containerStyle.container}>
        <div className={styles.mainWrapper}>
          {showMobMenu && (
            <MobileMenu setShow={setShowMobMenu} dict={dict} lang={lang} />
          )}
          <Logo lang={lang} />
          <NavigationList dict={dict} lang={lang} cl={styles.bigScreen} />
          <div className={styles.wrapperRight}>
            <select
              className={styles.select}
              onChange={handleChange}
              name="select"
              defaultValue={lang}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <Link href={`/${lang}/mall-map`} className={styles.link}>
              <img
                src="/media/icons/map-mob.png"
                alt="icon"
                className={styles.link_img_mob}
              />
              <img
                src="/media/icons/map.png"
                alt="icon"
                className={styles.link_img}
              />
              <p className={styles.link_text}>{dict.nav.mall_map}</p>
            </Link>
            {!showMobMenu && (
              <button
                className={styles.btn}
                onClick={() => handleShowMobMenu()}
              >
                <img
                  src="/media/icons/mob-menu.png"
                  width={32}
                  height={32}
                  alt="icon"
                />
              </button>
            )}
            {showMobMenu && (
              <button
                className={styles.btn}
                onClick={() => handleShowMobMenu()}
                type="button"
              >
                <img
                  src="/media/icons/iconClose.png"
                  width={32}
                  height={32}
                  alt="icon close"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
