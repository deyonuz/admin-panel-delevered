import React from "react";
import { FaArrowLeft, FaChevronRight, FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import TitleWithBorderB from "../components/TitleWithBorderB";
import ProductImg from "../assets/product-img.png";
import { Input, Select } from "antd";
import ProductOptionsTable from "../components/ProductOptionsTable";
const { TextArea } = Input;

const AddProductPage = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <div className="flex items-center text-[14px]">
            <Link to={"/menu"} className="flex items-center text-[#6E7C87]">
              <FaArrowLeft className="text-[#D5DADD]" />
              <FaFolder className="text-[#D5DADD] mx-[8px]" />
              Меню
            </Link>
            <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
            <Link
              to={"/menu/add"}
              className="text-[#252C32] flex items-center breadcrumb-item-active"
            >
              <FaFolder className="mr-[4px] text-[#4094F7]" />
              Добавить
            </Link>
          </div>
        </div>
        <form className="text-[14px] p-[16px]">
          <div className="bg-white pt-[8px] rounded-[6px]">
            <TitleWithBorderB>Добавить новый продукт</TitleWithBorderB>
            <div className="p-[16px] flex">
              <div className="w-[160px]">
                <label
                  htmlFor="product-img"
                  className="relative cursor-pointer"
                >
                  <img
                    src={ProductImg}
                    alt=""
                    className="w-[160px] h-[160px] rounded-[6px] "
                  />
                  <input
                    className="absolute invisible left-0 top-0"
                    type="file"
                    id="product-img"
                  />
                  <span className="text-center text-[14px] mt-[8px] text-[#0E73F6] block">
                    Изображение товара
                  </span>
                </label>
              </div>
              <div className="w-[calc(100%-160px)] gap-[20px] pl-[20px] grid grid-cols-3">
                <div className="w-full">
                  <label
                    htmlFor="title-uz"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Название на узбекском
                  </label>
                  <Input id="title-uz" placeholder="Название на узбекском" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="title-ru"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Название на русском
                  </label>
                  <Input id="title-ru" placeholder="Название на русском" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="title-eng"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Название на английском
                  </label>
                  <Input id="title-eng" placeholder="Название на английском" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Цена
                  </label>
                  <Input id="price" placeholder="Цена" />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="category"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Категории
                  </label>
                  <Select
                    className="bg-white-select w-full"
                    options={[{ label: "Kiyim", value: "kiyim" }]}
                    id="category"
                    placeholder="Категории"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="prioritet"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Приоритет
                  </label>
                  <Select
                    className="bg-white-select w-full"
                    options={[{ label: "Kiyim", value: "kiyim" }]}
                    id="prioritet"
                    placeholder="Приоритет"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="desc-uz"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Описание на узбекском
                  </label>
                  <TextArea
                    className="w-full"
                    id="desc-uz"
                    placeholder="Описание"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="desc-ru"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Описание на русском
                  </label>
                  <TextArea
                    className="w-full"
                    id="desc-ru"
                    placeholder="Описание"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="desc-eng"
                    className="mb-[4px] block font-semibold text-[#303940]"
                  >
                    Описание на английском
                  </label>
                  <TextArea
                    className="w-full"
                    id="desc-eng"
                    placeholder="Описание"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-[20px] pt-[8px] rounded-[6px]">
            <TitleWithBorderB>Список опций</TitleWithBorderB>
            <div className="p-[16px] flex">
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
