import React from "react";
import {
  FaArrowLeft,
  FaChevronRight,
  FaFilter,
  FaFolder,
  FaPlus,
} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import CompanyBranchesTabel from "../CompanyBranchesTable";
import CompanyRegionsTabel from "../CompanyRegionsTabel";
import SearchInput from "../SearchInput";

const CompanyRegions = () => {
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
            to={"/settings/company/regions"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            L'Oréal
          </Link>
        </div>
        <Link
          to="/settings/company/regions/add"
          className="ml-[16px] px-[16px] h-full flex border-l items-center text-[14px] text-[#1AC19D] font-medium"
        >
          <FaPlus className="mr-[12px]" />
          Добавить
        </Link>
      </div>
      <div className="flex h-[56px] justify-between items-center px-[20px] text-[14px] bg-[#F7F9FB] text-[#6E8BB7]">
        <div className="flex items-center h-full">
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
        <Link to={"/"} className="text-[#303940] flex items-center">
          <FaFilter className="mr-[12px]" />
          Фильтр
        </Link>
      </div>
      <div className="p-[20px]">
        <div className="p-[20px] bg-white rounded-[6px]">
          <div>
            <SearchInput />
          </div>
          <CompanyRegionsTabel />
        </div>
      </div>
    </div>
  );
};

export default CompanyRegions;
