import { Tabs } from "antd";
import React from "react";
import CashiersTable from "../CashiersTable";
import CouriersTable from "../CouriersTable";



const PersonalContent = ({ activeKey, setActiveKey }) => {

  const tabItems = [
    {
      key: "1",
      label: "Курьеры",
      children: <CouriersTable activeKey={activeKey} />,
    },
    {
      key: "2",
      label: "Кассиры",
      children: <CashiersTable activeKey={activeKey} />,
    },
  ];

  return (
    <div className="p-[20px]">
      <div className="p-[16px] bg-white rounded-[6px]">
        <Tabs
          className="bg-white"
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          items={tabItems}
        />
      </div>
    </div>
  );
};

export default PersonalContent;
