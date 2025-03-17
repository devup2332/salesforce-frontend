import React from "react";
import AlertIcon from "../icons/AlertIcon";
import CheckIcon from "../icons/CheckIcon";

type ToastProps = {
  text: string;
  type: "success" | "error";
};

const icons = {
  success: <CheckIcon className="text-green-300 fill-current" />,
  error: <AlertIcon className="text-red-400 fill-current" />,
};

const Toast: React.FC<ToastProps> = ({ text, type }) => {
  return (
    <div className="bg-bg-1 px-6 py-4 rounded-xl font-family text-sm shadow-md shadow-black/10 flex flex-1 items-center gap-4">
      {icons[type]}
      {text}
    </div>
  );
};

export default Toast;
