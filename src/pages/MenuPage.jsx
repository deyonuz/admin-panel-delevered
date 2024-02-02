import { Tabs } from 'antd'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Aside from '../components/Aside'
import MenuCategoriesTable from '../components/MenuCategoriesTable'
import MenuProductsTable from '../components/MenuProductsTable'
import SearchInput from '../components/SearchInput'

const MenuPage = () => {

  const tabItems = [
    {
      key: "1",
      label: "Категории",
      children: <MenuCategoriesTable />
    },
    {
      key: "2",
      label: "Продукты",
      children: <MenuProductsTable />
    },
  ];

  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <h1 className="text-[20px] text-[#303940] font-semibold">Меню</h1>
          <div className="flex items-center">
            <SearchInput />
            <Link
              to={`/menu/add`}
              className="ml-[20px] border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]"
            >
              <FaPlus className="mr-[12px]" />
              Добавить
            </Link>
          </div>
        </div>
        <Tabs items={tabItems} />
      </div>
    </div>
  );
}

export default MenuPage