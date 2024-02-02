import { Input, Select } from "antd";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaChevronRight,
  FaFolder,
  FaMinus,
  FaPlus,
  FaSave,
} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import TitleWithBorderB from "../components/TitleWithBorderB";
import ClientImg from "../assets/client-img.png";

const AddBranchCashier = () => {
  const [phones, setPhones] = useState([{ id: "1", phone: "", isNew: false }]);

  const handleChangePhones = (value, index) => {
    const currentPhones = [...phones];
    currentPhones[index].phone = value;
    setPhones(currentPhones);
  };
  const handledeletePhone = (id) => {
    const filteredPhones = phones.filter((phone) => phone.id !== id);
    setPhones(filteredPhones);
  };

  const addPhone = () => {
    const newPhone = {
      id: Date.now(),
      phone: "",
      isNew: true,
    };
    setPhones([...phones, newPhone]);
  };

  return (
    <form className="w-full h-screen overflow-y-auto">
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
            className="flex items-center text-[#6E7C87]"
          >
            <FaFolder className="text-[#D5DADD] mx-[8px]" />
            L'Oréal
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={"/settings/company/branches/personal"}
            className="flex items-center text-[#6E7C87]"
          >
            <FaFolder className="text-[#D5DADD] mx-[8px]" />
            Кассиры
          </Link>
          <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
          <Link
            to={`/settings/company/branches/personal/cashier`}
            className="text-[#252C32] flex items-center breadcrumb-item-active"
          >
            <FaFolder className="mr-[4px] text-[#4094F7]" />
            Халдарова Мухлиса
          </Link>
        </div>
        <div className="flex h-full items-center px-[16px] border-l">
          <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
            <Link
              to={"/settings/company/branches/personal"}
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
        <div className="text-[14px] bg-white pt-[8px] rounded-[6px]">
          <TitleWithBorderB>Общие сведения</TitleWithBorderB>
          <div className="p-[16px] flex">
            <div className="w-[144px] pr-[24px]">
              <img
                src={ClientImg}
                alt="client-img"
                className="w-[120px] h-[120px] rounded-full"
              />
              <div className="relative text-center mt-[8px]">
                <label
                  htmlFor="client-img"
                  className="cursor-pointer text-[14px] font-medium text-[#4094F7]"
                >
                  Изменить фото
                </label>
                <input
                  name="clientImg"
                  type="file"
                  className="absolute left-0 top-0 invisible"
                  id="client-img"
                />
              </div>
            </div>
            <div className="w-[calc(100%-144px)]">
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[15%] font-semibold">Полное имя</h2>
                <div className="w-[85%] pl-[24px]">
                  <Input
                    //value={clientName}
                    //onChange={handleChangeFullName}
                    name="clientName"
                  />
                </div>
              </div>
              <div className="w-full">
                {phones.map(({ id, phone, isNew }, index) => (
                  <div className="flex items-center mb-[16px]" key={id}>
                    <h2 className="w-[15%] font-semibold">Телефон</h2>
                    <div className="w-[85%] items-center gap-x-[16px] flex pl-[24px]">
                      <InputMask
                        className="w-full outline-none focus-within:border-[#1677ff] h-[32px] pl-[12px] border border-[#d9d9d9] rounded-[6px]"
                        value={phone}
                        mask={"+\\9\\98 (99) 999-99-99"}
                        onChange={(evt) =>
                          handleChangePhones(evt.target.value, index)
                        }
                      />
                      <button
                        type="button"
                        onClick={
                          !isNew ? addPhone : () => handledeletePhone(id)
                        }
                        className="flex items-center justify-center rounded-[6px] h-[32px] bg-[#4094F71A] w-[32px]"
                      >
                        {!isNew ? (
                          <FaPlus className="text-[#4094F7]" />
                        ) : (
                          <FaMinus className="text-[red]" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
                <div className="w-full flex items-center mb-[16px]">
                  <h2 className="w-[15%] font-semibold">Логин</h2>
                  <div className="w-[85%] pl-[24px]">
                    <Input
                      //value={clientSurname}
                      //onChange={handleChangeFullName}
                      name="clientSurname"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center mb-[16px]">
                <h2 className="w-[15%] font-semibold">Должность</h2>
                <div className="w-[85%] pl-[24px]">
                  <Select
                    className="w-full bg-white-select"
                    //value={typeClient}
                    //onChange={(varl) => dispatch(setTypeClient(val))}
                    options={[
                      { label: "Курьер Oqtepa", value: "Курьер Oqtepa" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBranchCashier;
