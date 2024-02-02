import { useState } from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { FaFilter, FaPlus } from "react-icons/fa";
import FixedTariffsTable from "../components/FixedTariffsTable";
import ByKilometerTariffsTable from "../components/ByKilometerTariffsTable";

const SettingsTariffs = () => {
  const [activeKey, setActiveKey] = useState("1");

  const tabItems = [
    {
      label: "Фиксированная",
      key: "1",
      children: <FixedTariffsTable activeKey={activeKey} />,
    },
    {
      label: "По километру",
      key: "2",
      children: <ByKilometerTariffsTable activeKey={activeKey} />,
    },
  ];

  return (
    <div>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <h1 className="text-[18px] text-[#303940] font-semibold">Тарифы</h1>
        <Link
          to={`/settings/tariffs/${
            activeKey === "1" ? "fixed" : "byKilometer"
          }`}
          className="border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]"
        >
          <FaPlus className="mr-[12px]" />
          Добавить
        </Link>
      </div>
      <Tabs
        items={tabItems}
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
      />
    </div>
  );
};

export default SettingsTariffs;
