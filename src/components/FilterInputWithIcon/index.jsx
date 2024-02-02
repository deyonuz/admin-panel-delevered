import React from "react";

const FilterInputWithIcon = ({ icon, placeholder, ...others }) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        {...others}
        placeholder={placeholder}
        className="w-full outline-none focus:border-[#007AFF] h-[36px] border pl-[44px] rounded-xl"
      />
      {icon}
    </div>
  );
};

export default FilterInputWithIcon;
