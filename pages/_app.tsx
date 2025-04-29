import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Page } from "../types/page";
import { Fragment } from "react";
import { Component } from "react";

type Props = AppProps & {
  Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
};

export default MyApp;
