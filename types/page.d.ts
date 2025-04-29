// Borrowed from https://stackoverflow.com/questions/62115518/persistent-layout-in-next-js-with-typescript-and-hoc

import { NextPage } from "next";
import { getComponentTypeModule } from "next/dist/server/lib/app-dir-module";
import { Component, ComponentType, ReactElement, ReactNode } from "react";

export type Page<p = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
