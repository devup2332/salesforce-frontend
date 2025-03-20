import React from "react";
import LoaderIcon from "../icons/LoaderIcon";

const Loader = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <LoaderIcon className="w-6 h-6 text-primary-900 fill-current animate-spin" />
    </div>
  );
};

export default Loader;
