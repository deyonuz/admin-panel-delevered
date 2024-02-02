import { Table } from 'antd';
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import TableActionButton from '../TableActionButton';

const CompanyTabel = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
    },
    {
      title: "Описание",
      dataIndex: "description",
    },
    {
      title: "Год основания",
      dataIndex: "foundationYear",
      align: 'center',
    },
    {
      title: (
        <button className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      render: () => <TableActionButton href="/settings/company/add" />,
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      title: "L'Oréal",
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
      foundationYear: 2018,
    },
    {
      key: "2",
      title: "L'Oréal",
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
      foundationYear: 2018,
    },
    {
      key: "3",
      title: "L'Oréal",
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
      foundationYear: 2018,
    },
  ];

  return (
    <div className="border bg-white p-[20px] mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default CompanyTabel