import React, { useState } from 'react';

import styles from '../styles/Home.module.css';
import css from '../styles/progress.module.css';
import { Modal } from './utils';

export function Important({ title, message }) {
  const [state, setState] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.under_construction}>
        <p className={styles.under_construction_msg}>{message}</p>
        <button
          className={styles.show_progress}
          onClick={() => setState(!state)}>
          Show progress
        </button>
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
export function DashTimeLine() {
  return (
    // <div className={`${css.modal_container}`}>
    <RightBox />
    // </div>
  );
}

function RightBox() {
  const data = [
    {
      date: `3rd May 2020`,
      time: `7: 00 PM`,
      title: `Chris Serrano posted a photo on your wall.`,
    },
    {
      date: `19th May 2020`,
      time: `3: 00 PM`,
      title: `Mia Redwood commented on your last post.`,
    },
    {
      date: `17st June 2020`,
      time: `7: 00 PM`,
      title: `Lucas McAlister just send you a message.`,
    },
  ];

  return (
    <div className={css.rightbox_holder}>
      <div className={css.rightbox_container}>
        <ul className={css.rightbox}>
          {data.map((item, index) => (
            <li className={css.rightbox_item} key={index}>
              <time className={css.timestamp}>
                <span className={css.date}>{item.date}</span>
                <span className={css.time}>{item.time}</span>
              </time>
              <div className={css.item_title}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
