import Head from 'next/head';
import React from 'react';
import 'styles/main.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    // eslint-disable-next-line react/jsx-filename-extension
    <Component {...pageProps} />
  </>
);

export default MyApp;
