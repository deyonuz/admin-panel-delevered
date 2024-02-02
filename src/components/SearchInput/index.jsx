import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchInput = ({...props}) => {
  return (
    <div className="relative flex items-center w-[400px]">
      <input
        type="text"
        placeholder="Поиск"
        {...props}
        className="outline-none focus:border-[#007AFF] block border text-[#9AA6AC] text-[14px] h-[32px] border-[#E5E9EB] rounded-[6px] w-full pl-[32px]"
      />
      <FaSearch className="absolute left-[8px] text-[#9AA6AC]" />
    </div>
  );
};

export default SearchInput;
