import { Input, Select } from "antd";
import React from "react";
import TitleWithBorderB from "../TitleWithBorderB";
const {TextArea} = Input;

const CompanyAbout = () => {
  return (
    <div className="font-inter text-[14px] my-[20px] grid grid-cols-2 gap-[20px]  px-[20px]">
      <div className="w-full bg-white pt-[8px] pb-[16px] rounded-[6px]">
        <TitleWithBorderB>Общие сведения</TitleWithBorderB>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Название компании
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Владелец
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Год основания
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Тип компании
          </h2>
          <div className="w-[60%]">
            <Select
              className="w-full bg-white-select"
              defaultValue={"Производство"}
              options={[{ label: "Производство", value: "Производство" }]}
            />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Индустрия
          </h2>
          <div className="w-[60%]">
            <Select
              className="w-full bg-white-select"
              defaultValue={"Еда и напитки"}
              options={[{ label: "Еда и напитки", value: "Еда и напитки" }]}
            />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Bеб сайт организации
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-[8px] rounded-[6px]">
        <TitleWithBorderB>Рабочий процесс</TitleWithBorderB>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Головной офис
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Кол-во сотрудников от
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Кол-во сотрудников до
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Доход от
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
        <div className="flex px-[16px] items-center mt-[16px]">
          <h2 className="w-[40%] pr-[16px] text-[#48535B] font-semibold">
            Доход до
          </h2>
          <div className="w-[60%]">
            <Input className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-[8px] rounded-[6px]">
        <TitleWithBorderB>Описание</TitleWithBorderB>
        <div className="p-[16px]">
          <TextArea rows={6} />
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
