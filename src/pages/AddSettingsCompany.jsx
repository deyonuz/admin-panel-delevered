import React from "react";
import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaChevronRight, FaFolder } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import CompanyAbout from "../components/CompanyAbout";



const AddSettingsCompany = () => {
  return (
    <form>
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
            to={"/settings/company/add"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            L'Oréal
          </Link>
        </div>
        <div className="flex h-full items-center px-[16px] border-l">
          <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
            <Link to={"/settings/company"} className="flex items-center">
              <TiDelete className="text-[20px] mr-[12px]" />
              <span>Отменить</span>
            </Link>
          </div>
          <button className="ml-[16px] flex items-center text-[14px] text-[#4094F7] font-medium">
            <FaSave className="text-[20px] mr-[12px]" />
            <span>Сохранить</span>
          </button>
        </div>
      </div>
      <div className="flex h-[56px] items-center px-[20px] text-[14px] bg-[#F7F9FB] text-[#6E8BB7]">
        <NavLink
          to="/settings/company/add"
          className="tablink h-full flex items-center"
        >
          О компании
        </NavLink>
        <NavLink
          to="/settings/company/branches"
          className="mx-[16px] tablink h-full flex items-center"
        >
          Филиалы компаний
        </NavLink>
        <NavLink
          to="/settings/company/regions"
          className="tablink h-full flex items-center"
        >
          Регионы
        </NavLink>
      </div>
      <CompanyAbout />
    </form>
  );
};

export default AddSettingsCompany;
