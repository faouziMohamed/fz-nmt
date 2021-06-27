import React from 'react';

import { useModalStyle } from '../src/theme';

export function IncludeIf({ condition, children }) {
  return condition ? children : null;
}

export function Modal({ children, show, handleClose, modalTitle = '' }) {
  const classes = useModalStyle()();
  const showHideModal = show ? '' : classes.hidden;

  return (
    <div
      className={`${showHideModal} ${classes.modal_container}`}
      aria-modal={true}
      aria-hidden={true}
      role={'dialog'}>
      <section className={classes.modal}>
        <div className={classes.close_btn_container}>
          <button className={classes.close_btn} onClick={handleClose}>
            <i className={`fad fa-times-circle`}></i>
          </button>
        </div>
        <h2 className={classes.modal_title}>{modalTitle}</h2>
        <div>{children}</div>
      </section>
    </div>
  );
}
