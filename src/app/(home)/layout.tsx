import PrivateRouteProvider from "@/providers/PrivateRouteProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <PrivateRouteProvider>{children}</PrivateRouteProvider>;
};

export default Layout;
