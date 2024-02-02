import React from 'react'
import { FaFilter, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CompanyTabel from '../components/CompanyTabel';
import SearchInput from '../components/SearchInput';

const SettingsCompany = () => {
  return (
    <div>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <h1 className="text-[18px] text-[#303940] font-semibold">
          Список компаний
        </h1>
        <Link
          to={`/settings/company/add`}
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
            <Link to={"/"} className="text-[#303940] flex items-center">
              <FaFilter className="mr-[12px]" />
              Фильтр
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[20px]">
        <CompanyTabel />
      </div>
    </div>
  );
}

export default SettingsCompany