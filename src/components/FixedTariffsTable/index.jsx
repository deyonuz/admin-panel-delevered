import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import SearchInput from "../SearchInput";
import TableActionButton from "../TableActionButton";

const FixedTariffsTable = ({ activeKey }) => {
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
    },
    {
      title: "Базовая цена",
      dataIndex: "price",
    },
    {
      title: (
        <button
          type="button"
          className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]"
        >
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      render: () => (
        <TableActionButton
          href={`/settings/tariffs/${
            activeKey === "1" ? "fixed" : "byKilometer"
          }`}
        />
      ),
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      title: "Venenatis Mollis",
      price: "50 000 сум",
    },
    {
      key: "2",
      title: "Venenatis Mollis",
      price: "50 000 сум",
    },
  ];

  return (
    <div className="p-[20px]">
      <div className="p-[20px] bg-white rounded-[6px]">
        <SearchInput />
        <div className="mt-[20px] w-full overflow-auto">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default FixedTariffsTable;
