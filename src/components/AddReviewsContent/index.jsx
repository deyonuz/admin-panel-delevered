import { Input, Select, Switch } from 'antd';
import React from 'react'
import TitleWithBorderB from '../TitleWithBorderB';

const AddReviewsContent = () => {
  return (
    <div className="px-[20px]">
      <div className="w-[70%] text-[14px] bg-white pt-[8px] rounded-[6px] mt-[20px]">
        <TitleWithBorderB>Отзыв</TitleWithBorderB>
        <div className="p-[16px]">
          <div className="flex items-center mb-[16px]">
            <h2 className="w-1/4 pr-[16px] font-semibold text-[#48535B]">
              Описание
            </h2>
            <div className="w-3/4">
              <Input className="w-full" />
            </div>
          </div>
          <div className="flex items-center mb-[16px]">
            <h2 className="w-1/4 pr-[16px] font-semibold text-[#48535B]">
              Относится к
            </h2>
            <div className="w-3/4">
              <Select
                defaultValue={"Курьер"}
                className="w-full bg-white-select"
                options={[{ label: "Курьер", value: "Курьер" }]}
              />
            </div>
          </div>
          <div className="flex items-center mb-[16px]">
            <h2 className="w-1/4 pr-[16px] font-semibold text-[#48535B]">
              Тип
            </h2>
            <div className="w-3/4 flex items-center">
              <Switch defaultChecked />
              <span className="ml-[12px]">Позитивный</span>
            </div>
          </div>
          <div className="flex items-center mb-[16px]">
            <h2 className="w-1/4 pr-[16px] font-semibold text-[#48535B]">
              Статус
            </h2>
            <div className="w-3/4 flex items-center">
              <Switch defaultChecked />
              <span className="ml-[12px]">Активный</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReviewsContent