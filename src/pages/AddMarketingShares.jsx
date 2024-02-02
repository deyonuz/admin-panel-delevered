import { DatePicker, Input, Switch } from "antd";
import React from "react";
import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaChevronRight, FaFolder } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import TitleWithBorderB from "../components/TitleWithBorderB";
import ShareImg from "../assets/share-img.png"

const AddMarketingShares = () => {
  return (
    <form>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <div className="flex items-center text-[14px]">
          <Link
            to={"/marketing/shares"}
            className="flex items-center text-[#6E7C87]"
          >
            <FaArrowLeft className="text-[#D5DADD]" />
            <FaFolder className="text-[#D5DADD] mx-[8px]" />
            Список акций
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/marketing/shares/add"}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            Vulputate velit lacus, enim viverra quis
          </Link>
        </div>
        <div className="flex h-full items-center px-[16px] border-l">
          <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
            <Link to={"/marketing/shares"} className="flex items-center">
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
      <div className="pl-[20px] mt-[20px]">
        <div className="rounded-[6px] pt-[8px] bg-white">
          <TitleWithBorderB>Общие сведения</TitleWithBorderB>
          <div className="p-[16px] text-[14px]  w-[80%] flex">
            <div className="w-[144px] pr-[24px]">
              <img
                src={ShareImg}
                alt="client-img"
                className="w-[120px] h-[120px] rounded-full"
              />
              <div className="relative text-center mt-[8px]">
                <label
                  htmlFor="share-img"
                  className="cursor-pointer text-[14px] font-medium text-[#4094F7]"
                >
                  Изменить фото
                </label>
                <input
                  name="shareImg"
                  type="file"
                  className="absolute left-0 top-0 invisible"
                  id="share-img"
                />
              </div>
            </div>
            <div className="w-[calc(100%-144px)]">
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[25%] text-[#48535B] font-semibold">
                  Название
                </h2>
                <div className="w-[75%] pl-[24px]">
                  <Input value={"Vulputate velit lacus, enim viverra quis."} />
                </div>
              </div>
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[25%] text-[#48535B] font-semibold">
                  Начало акции
                </h2>
                <div className="w-[75%] pl-[24px]">
                  <DatePicker className="w-full" />
                </div>
              </div>
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[25%] text-[#48535B] font-semibold">
                  Конец акции
                </h2>
                <div className="w-[75%] pl-[24px]">
                  <DatePicker className="w-full" />
                </div>
              </div>
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[25%] text-[#48535B] font-semibold">Cтатус</h2>
                <div className="w-[75%] pl-[24px]">
                  <Switch defaultChecked />
                  <span className="ml-[12px]">Активный</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMarketingShares;
