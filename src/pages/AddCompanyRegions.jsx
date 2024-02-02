import { Input } from 'antd';
import React from 'react'
import { FaArrowLeft, FaChevronRight, FaFolder, FaSave } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import TitleWithBorderB from '../components/TitleWithBorderB';

const AddCompanyRegions = () => {
  return (
    <form className="text-[14px]">
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
            <FaFolder className="mr-[4px] text-[#D5DADD]" />
            L'Oréal
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/settings/company/regions/add"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            Узбекистан
          </Link>
        </div>
        <div className="flex h-full items-center px-[16px] border-l">
          <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
            <Link
              to={"/settings/company/regions"}
              className="flex items-center"
            >
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
      <div className="p-[20px] w-[80%]">
        <div className="bg-white rounded-[6px] pt-[8px]">
          <TitleWithBorderB>Общие сведения</TitleWithBorderB>
          <div className="p-[16px]">
            <div className="flex items-center">
              <h2 className="w-[120px] text-[#48535B] font-semibold">
                Название
              </h2>
              <div className="w-[calc(100%-120px)] pl-[16px]">
                <Input />
              </div>
            </div>
            <div className="flex mt-[16px] items-center">
              <h2 className="w-[120px] text-[#48535B] font-semibold">
                Краткое навание
              </h2>
              <div className="w-[calc(100%-120px)] pl-[16px]">
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddCompanyRegions