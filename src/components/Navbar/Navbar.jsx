import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../image";
import { useRouter } from "next/router";
import InputComp from "../InputComp";

const Navbar = () => {
  const router = useRouter();
  const handleContactClick = () => {
    window.location.href = "mailto:contact@girmantech.com";
  };
  return (
    <div className="bg-white border-b border-gray-300 shadow-md fixed top-0 w-full z-10 text-black">
      <nav className="mx-auto max-w-screen-xl p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="w-10 h-10">
              <Image src={Logo} />
            </div>
            <div className="text-black flex flex-col font-bold">
              <h1 className="text-2xl font-bold font-sans">Girman</h1>
              <p className="text-[10px] tracking-[.30rem]">TECHNOLOGIES</p>
            </div>
          </div>

          {router.pathname === "/search" ? (
            <div className="md:w-[40%] mt-5 md:mt-0">
              <InputComp shadow={false} />
            </div>
          ) : (
            <div className="space-x-4 mt-4 md:mt-0 p-2 md:p-0 flex">
              <Link href="/">
                <h1 className="hover:text-black text-blue-500 font-semibold font-sans cursor-pointer uppercase">
                  Search
                </h1>
              </Link>
              <Link href="https://girmantech.com">
                <h1 className="hover:text-blue-500 cursor-pointer uppercase">Website</h1>
              </Link>
              <Link href="https://www.linkedin.com/company/girmantech/">
                <h1 className="hover:text-blue-500 cursor-pointer uppercase">LinkedIn</h1>
              </Link>
              <div
                onClick={() => router.push('mailto:email@yahoo.com')}
                className="hover:text-blue-500 cursor-pointer uppercase"
              >
                Contact
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
