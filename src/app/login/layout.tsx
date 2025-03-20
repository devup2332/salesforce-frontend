import PublicRouteProvider from "@/providers/PublicRouteProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LoginLayout: React.FC<Props> = ({ children }) => {
  return <PublicRouteProvider>{children}</PublicRouteProvider>;
};

export default LoginLayout;
