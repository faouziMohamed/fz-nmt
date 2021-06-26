import Link from 'next/link';
import React from 'react';

import theme, { useNavBarStyle } from '../src/theme';
import { Important } from './project-progress';
import { IncludeIf } from './utils';

export default function Header({ isHome }) {
  const classes = useNavBarStyle(theme);
  return (
    <React.Fragment>
      <header id='top' className={classes.site_main_header}>
        <nav>
          <ul className={classes.nav_ul}>
            <li className={`${classes.nav_list_item}`}>
              <Link href='/'>
                <a title='Go to home' className={`${classes.nav_links}`}>
                  <span>
                    <i className={'fad fa-home'} />
                    {/* <img
                      src='/images/fzt-official-2.png'
                      width='50'
                      alt='Website icon'
                    />
                    <span className={classes.links_text}>Fz Translator</span> */}
                    <span className={classes.links_text}>Home</span>
                  </span>
                </a>
              </Link>
            </li>
            <li className={`${classes.nav_list_item} `}>
              <Link href='/'>
                <a className={`${classes.nav_links}`}>
                  <span className={classes.links_content}>
                    <i className={'fad fa-donate'} />
                    <span className={classes.links_text}>Donate</span>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <IncludeIf condition={isHome}>
          <Important
            message={'Website under construction.'}
            title={'Website build progress'}
          />
        </IncludeIf>
      </header>
    </React.Fragment>
  );
}
