import { Button } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Link from 'next/link';
import React, { useState } from 'react';

import theme, {
  useBoxStyle,
  useButtonProgress,
  useHeaderMsgStyle,
  useNavBarStyle,
} from '../src/theme';
import { IncludeIf, Modal } from './utils';

export default function Header({ isHome }) {
  const classes = useNavBarStyle()(theme);
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

export function Important({ title, message }) {
  const [state, setState] = useState(false);
  const classes = useHeaderMsgStyle()();
  const btnCls = useButtonProgress()(theme);

  return (
    <React.Fragment>
      <div className={classes.under_construction}>
        <p className={classes.under_construction_msg}>{message}</p>
        <Button
          className={`${btnCls.root} ${btnCls.label}`}
          onClick={() => setState(!state)}>
          Show progress
          <MoreHorizIcon />
        </Button>
      </div>

      <Modal
        show={state}
        handleClose={() => setState(!state)}
        modalTitle={title}>
        <DashTimeLine />
      </Modal>
    </React.Fragment>
  );
}

function DashTimeLine() {
  const data = [
    {
      date: `26rd June 2021`,
      time: `7: 00 PM`,
      title: `Update website layout and design.`,
    },
    {
      date: `5th June 2021`,
      time: `3: 00 PM`,
      title: `Created website layout.`,
    },
    {
      date: `1st June 2021`,
      time: `7: 00 PM`,
      title: `Created Deep learning model for translation.`,
    },
  ];
  const classes = useBoxStyle()();
  return (
    <div className={classes.rightbox_holder}>
      <div className={classes.rightbox_container}>
        <ul className={classes.rightbox}>
          {data.map((item, index) => (
            <li className={classes.rightbox_item} key={index}>
              <time className={classes.timestamp}>
                <span className={classes.date}>{item.date}</span>
                <span className={classes.time}>{item.time}</span>
              </time>
              <div className={classes.item_title}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
