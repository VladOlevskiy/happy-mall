import React from 'react';
import stylesMob from '../../(styles)/MobileMenu.module.scss';
import styles from '../../(styles)/NavBar.module.scss';
import Link from 'next/link';
import NavigationList from './NavigationList';

const MobileMenu = ({ dict, lang }) => {
  return (
    <div className={stylesMob.mobileMenuWrapper}>
      <div>
        <NavigationList dict={dict} lang={lang} styles={stylesMob.nav} />
        <div className={stylesMob.mobileMenuWrapper_mapWrapper}>
          <Link href={`/${lang}/mall-map`} className={styles.link}>
            <img
              style={{ display: 'inline' }}
              src="/media/icons/map.png"
              alt="icon"
              className={styles.link_img}
            />
            style={{ display: 'inline' }}
            <p className={styles.link_text}>{dict.nav.mall_map}</p>
          </Link>
        </div>
      </div>
      <div className={stylesMob.link_mob_wrapper}>
        <Link
          style={{
            textDecoration: lang === 'en' ? 'underline #af8b68' : 'none',
            color: lang === 'en' ? '#af8b68' : '#c9c7c2',
          }}
          href={`/en`}
          className={stylesMob.link_mob}
        >
          en
        </Link>
        <Link
          style={{
            textDecoration: lang === 'ru' ? 'underline #af8b68' : 'none',
            color: lang === 'ru' ? '#af8b68' : '#c9c7c2',
          }}
          href={`/ru`}
          className={stylesMob.link_mob}
        >
          ru
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
