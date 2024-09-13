import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const InputComp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="w-full flex items-center bg-white shadow-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
      <IoSearch color="gray" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        className="w-full ml-3 outline-none"
      />
    </div>
  );
};

export default InputComp;
