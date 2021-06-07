import Link from 'next/link';
import React from 'react';

import styles from '../styles/Home.module.css';
import { Important } from './project-progress';
import { IncludeIf } from './utils';

export default function Header({ isHome }) {
  return (
    <React.Fragment>
      <header id='top'>
        <nav>
          <ul className={styles.nav}>
            <li className={`${styles.nav_list_item}`}>
              <Link href='/'>
                <a className={`${styles.nav_links}  ${styles.nav_home_btn}`}>
                  Home
                </a>
              </Link>
            </li>
            <li></li>
            <li className={`${styles.nav_list_item} `}>
              <Link href='/'>
                <a className={`${styles.nav_links} ${styles.nav_donate_btn}`}>
                  Donate
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <IncludeIf condition={isHome}>
        <Important
          message={'Website under construction.'}
          title={'Website build progress'}
        />
      </IncludeIf>
    </React.Fragment>
  );
}
