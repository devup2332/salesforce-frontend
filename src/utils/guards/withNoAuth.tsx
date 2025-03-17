import React from "react";
type WithNoAuthProps = (WrappedComponent: React.FC) => React.FC;

const withNoAuth: WithNoAuthProps = (WrappedComponent) => {
  return () => {
    return <WrappedComponent />;
  };
};

export default withNoAuth;
