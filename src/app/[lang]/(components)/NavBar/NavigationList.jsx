import React from 'react';
import Link from 'next/link';
import styles from '../../(styles)/NavBar.module.scss';

const NavigationList = ({ dict, lang, cl }) => {
  return (
    <div className={cl}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/shops`}>
            {dict.nav.shops}
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/restaurants`}>
            {dict.nav.restaurants}
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/services`}>
            {dict.nav.services}
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/entertainment`}>
            {dict.nav.entertainment}
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/announcements`}>
            {dict.nav.announcements}
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link className={styles.nav_link} href={`/${lang}/contacts`}>
            {dict.nav.contacts}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;
