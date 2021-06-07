import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pageMetadata, home }) {
  return (
    <React.Fragment>
      <React.StrictMode>
        <PageDescription pageMetadata={pageMetadata} />
        <div className={`${styles.app} ${styles.page_container}`} id='app'>
          <Header isHome={home} />
          <main className={`${styles.main}`}>{children}</main>
          <Footer />
        </div>
      </React.StrictMode>
    </React.Fragment>
  );
}

export function PageDescription({ pageMetadata }) {
  return (
    <Head>
      <title>{pageMetadata.title}</title>
      <meta name='description' content={pageMetadata.description} />
      <link rel='icon' href='/favicon.png' />
    </Head>
  );
}
