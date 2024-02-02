import { Table } from 'antd'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import TableActionButton from '../TableActionButton';

const MenuCategoriesTable = () => {


  const columns = [
    {
      title: "№",
      dataIndex: "num",
      align: 'center',
    },
    {
      title: "Название категории",
      dataIndex: "title",
    },
    {
      title: "Описание",
      dataIndex: "desc",
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
          href={`/menu/add`}
        />
      ),
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      num: 1,
      title: "🎉 Акции",
      desc: "Холодный Сендвич NEW	",
    },
    {
      key: "2",
      num: 2,
      title: "🎉 Акции",
      desc: "Холодный Сендвич NEW	",
    },
  ];

  return (
    <div className='p-[20px]'>
      <div className="bg-white p-[16px] rounded-[6px]">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  )
}

export default MenuCategoriesTable