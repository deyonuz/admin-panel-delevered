import { Input } from "antd";
import React from "react";
import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaChevronRight, FaFolder } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import TitleWithBorderB from "../components/TitleWithBorderB";

const ByKilometerTariffsPage = () => {
  return (
    <form>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <div className="flex items-center text-[14px]">
          <Link
            to={"/settings/tariffs"}
            className="flex items-center text-[#6E7C87]"
          >
            <FaArrowLeft className="text-[#D5DADD]" />
            <FaFolder className="text-[#D5DADD] mx-[8px]" />
            Тарифы
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/settings/tariffs/byKilometer"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            Venenatis Mollis
          </Link>
        </div>
        <div className="flex h-full items-center px-[16px] border-l">
          <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
            <Link to={"/settings/tariffs"} className="flex items-center">
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
      <div className="p-[20px] w-[60%] text-[14px]">
        <div className="bg-white pt-[8px] rounded-[6px]">
          <TitleWithBorderB>Общие сведение</TitleWithBorderB>
          <div className="p-[20px]">
            <div className="flex items-center">
              <h2 className="w-[176px] font-semibold text-[#48535B]">
                Название
              </h2>
              <div className="w-[calc(100%-176px)] pl-[16px]">
                <Input />
              </div>
            </div>
            <div className="mt-[16px] flex items-center">
              <h2 className="w-[176px] font-semibold text-[#48535B]">
                Базовая цена
              </h2>
              <div className="w-[calc(100%-176px)] pl-[16px]">
                <Input />
              </div>
            </div>
            <div className="mt-[16px] flex items-center">
              <h2 className="w-[176px] font-semibold text-[#48535B]">
                Включенные километры
              </h2>
              <div className="w-[calc(100%-176px)] pl-[16px]">
                <Input />
              </div>
            </div>
            <div className="mt-[16px] flex items-center">
              <h2 className="w-[176px] font-semibold text-[#48535B]">
                Далее сумма за км
              </h2>
              <div className="w-[calc(100%-176px)] pl-[16px]">
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ByKilometerTariffsPage;
