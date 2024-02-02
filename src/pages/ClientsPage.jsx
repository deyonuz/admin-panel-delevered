import React from "react";
import { FaPlus, FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import ClientsTable from "../components/ClientsTable";
import SearchInput from "../components/SearchInput";
import StatisticsCards from "../components/StatisticsCards";

const ClientsPage = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <h1 className="text-[20px] text-[#303940] font-semibold">Клиенты</h1>
          <Link
            to={`/clients/add`}
            className="border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]"
          >
            <FaPlus className="mr-[12px]" />
            Добавить
          </Link>
        </div>
        <div className="px-[20px] flex items-center justify-between py-[12px] bg-[#F7F9FB]">
          <SearchInput />
          <div className="flex items-center">
            <div className="ml-[24px]">
              <Link
                to={""}
                className="text-[#303940] flex items-center"
              >
                <FaFilter className="mr-[12px]" />
                Фильтр
              </Link>
            </div>
          </div>
        </div>
        <div className="p-[20px]">
          <StatisticsCards />
          <ClientsTable />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
