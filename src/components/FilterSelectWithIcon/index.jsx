import React from "react";

const FilterSelectWithIcon = ({ options, icon, placeholder, ...others }) => {
  return (
    <div className="relative flex items-center">
      <select {...others} className="relative z-10 bg-transparent focus:border-[#0E73F6] outline-none w-full h-[36px] pl-[44px] border rounded-xl">
        <option>{placeholder}</option>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {icon}
    </div>
  );
};

export default FilterSelectWithIcon;
