import React from "react";

const TitleWithBorderB = ({children}) => {
  return (
    <h2 className="font-inter pb-[8px] border-b px-[16px] text-[#1A2024] text-[14px] font-semibold">
      {children}
    </h2>
  );
};

export default TitleWithBorderB;
