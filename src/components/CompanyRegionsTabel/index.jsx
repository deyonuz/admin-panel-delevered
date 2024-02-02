import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";

const CompanyRegionsTabel = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "country",
    },
    {
      title: "Краткое навание",
      dataIndex: "lang",
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
      render: () => <TableActionButton href="/settings/company/regions/add" />,
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      country: "Узбекистан",
      lang: "UZ",
    },
    {
      key: "2",
      country: "Россия",
      lang: "RU",
    },
  ];

  return (
    <div className="mt-[20px] w-full overflow-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CompanyRegionsTabel;
