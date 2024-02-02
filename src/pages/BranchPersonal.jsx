import React, { useState } from "react";
import { FaFilter, FaPlus, FaSave } from "react-icons/fa";
import { FaArrowLeft, FaChevronRight, FaFolder } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import PersonalContent from "../components/PersonalContent";

const BranchPersonal = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <div>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <div className="flex items-center text-[14px]">
          <Link
            to={"/settings/company"}
            className="flex items-center text-[#6E7C87]"
          >
            <FaArrowLeft className="text-[#D5DADD]" />
            <FaFolder className="text-[#D5DADD] mx-[8px]" />
            Список компаний
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/settings/company/branches"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#D5DADD]" />
            L'Oréal
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/settings/company/branches/catalog"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            The Walt Disney Company
          </Link>
        </div>
        <Link
          to={`/settings/company/branches/personal/${activeKey === '1' ? 'courier' : 'cashier' }`}
          className="ml-[16px] px-[16px] h-full flex border-l items-center text-[14px] text-[#1AC19D] font-medium"
        >
          <FaPlus className="mr-[12px]" />
          Добавить
        </Link>
      </div>
      <div className="flex h-[56px] justify-between items-center px-[20px] text-[14px] bg-[#F7F9FB] text-[#6E8BB7]">
        <div className="flex items-center h-full">
          <NavLink
            to="/settings/company/branches/add"
            className="tablink h-full flex items-center"
          >
            О филиале
          </NavLink>
          <NavLink
            to="/settings/company/branches/catalog"
            className="mx-[16px] tablink h-full flex items-center"
          >
            Каталог
          </NavLink>
          <NavLink
            to="/settings/company/branches/personal"
            className="tablink h-full flex items-center"
          >
            Персонал
          </NavLink>
        </div>
        <Link to={"/"} className="text-[#303940] flex items-center">
          <FaFilter className="mr-[12px]" />
          Фильтр
        </Link>
      </div>
      <PersonalContent setActiveKey={setActiveKey} activeKey={activeKey} />
    </div>
  );
};

export default BranchPersonal;
