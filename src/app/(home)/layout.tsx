"use client";
import Header from "@/components/general/Header";
import Sidebar from "@/components/general/Sidebar";
import PrivateRouteProvider from "@/providers/PrivateRouteProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <PrivateRouteProvider>
      <div className="flex bg-bg-2 flex-1 h-screen">
        <Sidebar />
        <div className="flex flex-col w-full h-full overflow-y-auto sm:pl-[68px] customScroll">
          <Header />
          <div className="px-8 py-6">{children}</div>
        </div>
      </div>
    </PrivateRouteProvider>
  );
};

export default Layout;
