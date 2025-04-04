"use client";
import Header from "@/components/global/Header";
import Sidebar from "@/components/global/Sidebar";
import PrivateRouteProvider from "@/providers/PrivateRouteProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <PrivateRouteProvider>
      <div className="flex w-screen bg-bg-2 h-screen">
        <Sidebar />
        <div className="h-full w-screen overflow-y-auto sm:pl-[68px] customScroll">
          <Header />
          <div className="py-6 px-8 max-w-8xl w-full m-auto 3xl:px-0">
            {children}
          </div>
        </div>
      </div>
    </PrivateRouteProvider>
  );
};

export default Layout;
