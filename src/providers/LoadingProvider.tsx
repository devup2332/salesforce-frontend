"use client";
import Loader from "@/components/global/Loader";
import { useLoadingStore } from "@/store/LoadingStore";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LoadingProvider: React.FC<Props> = ({ children }) => {
  const { loading } = useLoadingStore();
  return (
    <>
      {children}{" "}
      {loading && <Loader className="backdrop-blur-lg bg-bg-2/30 z-20" />}
    </>
  );
};

export default LoadingProvider;
