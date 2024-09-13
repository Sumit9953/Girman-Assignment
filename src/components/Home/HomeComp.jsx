import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Logo2 } from "../image";
import { IoSearch } from "react-icons/io5";
import InputComp from "../InputComp";

const HomeComp = () => {
  return (
    <div className="mx-auto p-4 md:p-0 w-full xl:w-[50%] flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4">
        <Image className="h-[80px] w-[200px]" src={Logo2} />
        <h1 className="text-7xl sm:text-8xl font-bold mb-5">Girman</h1>
      </div>
      <InputComp />
    </div>
  );
};

export default HomeComp;
