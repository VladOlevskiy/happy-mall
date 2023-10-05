import React from 'react';
import Link from 'next/link';
import styles from '../../(styles)/NavBar.module.scss';

const Logo = ({ lang }) => {
  const linkHome = `/${lang}/`;

  return (
    <Link href={linkHome}>
      <img src="/media/icons/logo.png" className={styles.logo} alt="logo" />
    </Link>
  );
};

export default Logo;
