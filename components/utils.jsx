import React, { useEffect } from 'react';

import css from '../styles/progress.module.css';

export function IncludeIf({ condition, children }) {
  return condition ? children : null;
}

export function Modal({ children, show, handleClose, modalTitle = '' }) {
  const showHideModal = show ? '' : css.hidden;
  useEffect(() => {
    document.querySelector(`.${css.modal_container}`).focus();
  });
  return (
    <React.Fragment>
      <div
        className={`${css.modal_container} ${showHideModal}`}
        aria-modal={true}
        aria-hidden={true}
        role={'dialog'}>
        <section className={css.modal}>
          <div className={`${css.close_btn_container}`}>
            <button className={`${css.close_btn}`} onClick={handleClose}>
              <i className={`fad fa-times-circle`}></i>
            </button>
          </div>
          <h2 className={css.modal_title}>{modalTitle}</h2>
          <div>{children}</div>
        </section>
      </div>
    </React.Fragment>
  );
}
