"use client";
import React, { useMemo } from "react";
import Header from "../components/Header";

import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";


const StaticksView = dynamic(() => import("../components/StaticksView"), {
  ssr: false,
  loading: () => (
    <div className=" flex justify-center items-center h-full">
      <ClipLoader color="lightblue" size={80} />
    </div>
  ),
});


export const revalidate = 1
const StadisticsVieww = () => {
  return (
    <>
      <Header label="Stadistics" showBackArrow />
      <StaticksView />
    </>
  );
};

export default StadisticsVieww;
