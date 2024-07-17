/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Head from 'next/head'

const DarkTheme = ({ children }) => {
  return (
    <>
      <Head>

        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <link rel="stylesheet" href="./css/pe-icon.min.css" />
        <link rel="stylesheet" href="./css/iconicons.min.css" />
        <link rel="stylesheet" href="./css/animate.css" />
        <link rel="stylesheet" href="./css/font-awesom.min.css" />
        <link rel="stylesheet" href="./css/dark.css" />
      </Head>
      {children}

    </>
  );
};

export default DarkTheme