import { Button } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react';

import theme, {
  useBoxStyle,
  useButtonProgress,
  useHeaderMsgStyle,
} from '../src/theme';
import { Modal } from './utils';

export function Important({ title, message }) {
  const [state, setState] = useState(false);
  const classes = useHeaderMsgStyle();
  const btnCls = useButtonProgress(theme);

  return (
    <React.Fragment>
      <div className={classes.under_construction}>
        <p className={classes.under_construction_msg}>{message}</p>
        <Button
          classes={{ root: btnCls.root, label: btnCls.label }}
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
  const classes = useBoxStyle();
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
