import PublicRouteProvider from "@/providers/PublicRouteProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <PublicRouteProvider>{children}</PublicRouteProvider>;
};

export default Layout;
