import { useState } from "react";
import { Popover } from "antd";
import {
  FaSearch,
  FaFilter,
  FaUser,
  FaHashtag,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaPlus, FaTableColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  MdFilterAlt,
  MdCalendarToday,
  MdStore,
  MdPayments,
} from "react-icons/md";
import TableOrderActionButton from "../components/TableOrderActionButton";
import Aside from "../components/Aside";
import OrderTable from "../components/OrderTable";
import OrderTabs from "../components/OrderTabs";
import FilterInputWithIcon from "../components/FilterInputWithIcon";
import FilterSelectWithIcon from "../components/FilterSelectWithIcon";

const FilterOrderPage = () => {
  const columns = [
    {
      title: "№",
      dataIndex: "num",
      show: true,
    },
    {
      title: "Клиент",
      show: true,
      dataIndex: "client",
      render: (client) => (
        <div className="text-[14px]">
          <p className="text-[#303940] mb-[8px]">{client.name}</p>
          <a
            href={`tel:${client.phone}`}
            className="text-[#4094F7] font-medium"
          >
            {client.phone}
          </a>
        </div>
      ),
    },
    {
      title: "Ид.заказа",
      show: true,
      dataIndex: "orderId",
    },
    {
      title: "Таймер",
      show: true,
      dataIndex: "timer",
      render: (timer) => (
        <div className="bg-[#38D9B933] rounded-[6px] text-[#1AC19D] font-medium text-center py-[4px] px-[12px]">
          {timer}
        </div>
      ),
    },
    {
      title: "Курьер",
      show: true,
      dataIndex: "kuryer",
    },
    {
      title: "Филиал",
      dataIndex: "part",
      show: true,
      render: (client) => (
        <div className="text-[14px]">
          <p className="text-[#303940] mb-[8px]">{client.name}</p>
          <a
            href={`tel:${client.phone}`}
            className="text-[#4094F7] font-medium"
          >
            {client.phone}
          </a>
        </div>
      ),
    },
    {
      title: "Тип доставки",
      show: true,
      dataIndex: "type",
      render: (type) => (
        <div className="bg-[#F8DD4E4D] rounded-[6px] text-[#D29404] font-medium text-center py-[4px] px-[12px]">
          {type}
        </div>
      ),
    },
    {
      title: "Цена заказа",
      show: true,
      dataIndex: "price",
      render: (price) => price + " сум",
    },
    {
      title: "Адресс клиента",
      dataIndex: "address",
      show: true,
    },
    {
      title: "Action",
      show: true,
      dataIndex: "action",
      render: (action) => <TableOrderActionButton id={action} />,
      className: "action-col",
    },
  ];

  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <h1 className="text-[20px] text-[#303940] font-semibold">Заказы</h1>
          <div className="flex items-center px-[16px]">
            <button className="h-[32px] px-[8px] text-[14px] border rounded-xl flex items-center">
              <MdFilterAlt className="text-[20px] text-[#007AFF]" />
              <span>Сбросить фильтры</span>
              <span className="ml-[8px] text-[12px] font-semibold bg-[#007AFF] text-white rounded-full w-[20px] h-[20px] flex items-center justify-center">
                3
              </span>
            </button>
            <button
              //onClick={handleClickAddOrder}
              to={`/order/add-order`}
              className="ml-[12px] bg-[#0E73F6] flex items-center h-[32px] pl-[8px] pr-[12px] text-[14px] text-white rounded-xl"
            >
              <FaPlus className="mr-[12px]" />
              Добавить заказ
            </button>
          </div>
        </div>
        <div className="px-[20px] py-[16px] bg-white">
          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[16px]">
            <div className="w-full">
              <FilterInputWithIcon
                placeholder={"Номер телефона"}
                icon={
                  <FaPhoneAlt className="absolute left-[12px] text-[20px] text-[#007AFF]" />
                }
              />
            </div>
            <div className="w-full">
              <FilterSelectWithIcon
                placeholder={"Филиалы"}
                options={[{ value: "filial1", label: "filial1" }]}
                icon={
                  <MdStore className="z-0 absolute text-[20px] text-[#007AFF] left-[12px]" />
                }
              />
            </div>
            <div className="w-full">
              <FilterInputWithIcon
                placeholder={"Курьер"}
                icon={
                  <FaUser className="absolute left-[12px] text-[20px] text-[#007AFF]" />
                }
              />
            </div>
            <div className="w-full">
              <FilterInputWithIcon
                placeholder={"Ид. заказа"}
                icon={
                  <FaHashtag className="absolute left-[12px] text-[20px] text-[#007AFF]" />
                }
              />
            </div>
            <div className="w-full">
              <FilterInputWithIcon
                placeholder={"Период заказа "}
                icon={
                  <MdCalendarToday className="absolute left-[12px] text-[20px] text-[#007AFF]" />
                }
              />
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-x-[16px]">
                <div className="w-full">
                  <FilterSelectWithIcon
                    placeholder={"Статус"}
                    options={[{ value: "filial1", label: "filial1" }]}
                    icon={
                      <BsPatchCheckFill className="z-0 absolute text-[20px] text-[#007AFF] left-[12px]" />
                    }
                  />
                </div>
                <div className="w-full">
                  <FilterSelectWithIcon
                    placeholder={"Тип оплаты"}
                    options={[
                      { value: "cash", label: "наличные" },
                      { value: "payme", label: "payme" },
                      { value: "click", label: "click" },
                      { value: "bank", label: "через банк" },
                    ]}
                    icon={
                      <MdPayments className="z-0 absolute text-[20px] text-[#007AFF] left-[12px]" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DCE9F9] p-[20px]">
          <div className="bg-white rounded-[6px] pl-[20px]">
            <OrderTabs />
            <OrderTable columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOrderPage;
