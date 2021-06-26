import Head from 'next/head';
import React from 'react';

import { useLayoutStyle } from '../src/theme';
import Header from './Header';

export default function Layout({ children, pageMetadata, home }) {
  const classes = useLayoutStyle();
  return (
    <React.Fragment>
      <React.StrictMode>
        <PageDescription pageMetadata={pageMetadata} />
        <div className={`${classes.app}`} id='app'>
          <Header isHome={home} />
          <main className={`${classes.main}`}>{children}</main>
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
    </Head>
  );
}
