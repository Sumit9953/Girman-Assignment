import Image from "next/image";
import React from "react";
import { NotFound } from "../image";

const NotFoundData = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Image className="mt-10" src={NotFound} alt="404 not found" />
    </div>
  );
};

export default NotFoundData;
