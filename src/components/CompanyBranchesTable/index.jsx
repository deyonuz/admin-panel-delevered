import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";

const CompanyBranchesTabel = () => {
  const columns = [
    {
      title: "Филиалы",
      dataIndex: "title",
    },
    {
      title: "Год основания",
      dataIndex: "year",
      align: 'center',
    },
    {
      title: (
        <button type="button" className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      render: () => <TableActionButton href="/settings/company/branches/add" />,
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      title: "L'Oréal",
      year: 2018,
    },
    {
      key: "2",
      title: "L'Oréal",
      year: 2018,
    },
    {
      key: "3",
      title: "L'Oréal",
      year: 2018,
    },
  ];

  return (
    <div className="mt-[20px] w-full overflow-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CompanyBranchesTabel;
