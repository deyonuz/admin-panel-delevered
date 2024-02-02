import { Tabs } from 'antd'
import React from 'react'
import CatalogCategoriesTable from '../CatalogCategoriesTable';
import CatalogProductsTable from '../CatalogProductsTable';

const tabItems = [
  {
    key: "1",
    label: "Категории",
    children: <CatalogCategoriesTable />,
  },
  {
    key: "2",
    label: "Продукты",
    children: <CatalogProductsTable />,
  },
];

const CatalogContent = () => {
  return (
    <div className="p-[20px]">
      <div className="p-[16px] bg-white rounded-[6px]">
        <Tabs className="bg-white" items={tabItems} />
      </div>
    </div>
  );
}

export default CatalogContent