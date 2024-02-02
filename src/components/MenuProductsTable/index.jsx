import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";

const MenuProductsTable = () => {
  const columns = [
    {
      title: "№",
      dataIndex: "num",
      align: "center",
    },
    {
      title: "Наименование продукта",
      dataIndex: "title",
    },
    {
      title: "Описание",
      dataIndex: "desc",
    },
    {
      title: "Цена",
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
      render: () => <TableActionButton href={`/menu/add`} />,
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      num: 1,
      price: "24,000 сум",
      title: "Биг Шаурма с сыром	",
      desc: "Информация: донар булочка, говяжье мясо-донар, свежие огурцы, помидоры, томатный соус, сыр Хохланд	",
    },
    {
      key: "2",
      num: 2,
      price: "24,000 сум",
      title: "Биг Шаурма с сыром	",
      desc: "Информация: донар булочка, говяжье мясо-донар, свежие огурцы, помидоры, томатный соус, сыр Хохланд	",
    },
  ];

  return (
    <div className="p-[20px]">
      <div className="bg-white p-[16px] rounded-[6px]">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
};

export default MenuProductsTable;
