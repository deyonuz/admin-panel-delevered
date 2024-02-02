import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableActionButton from "../TableActionButton";

const ClientsTable = () => {
  const { clientsList } = useSelector(state => state.clientState);

  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      render: ({ title, id }) => <Link to={`/clients/add/${id}`}>{title}</Link>,
    },
    {
      title: "Номер телефона",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "Статус",
      dataIndex: "status",
      align: "center",
      render: ({ isActive, label }) => (
        <div className="flex justify-center">
          <div
            className={`${
              isActive
                ? "text-[#4094F7] bg-[#4094F726]"
                : "text-[#F76659] bg-[#F7665926]"
            } font-medium text-[14px] w-[144px] h-[24px] flex items-center justify-center rounded-[6px]`}
          >
            {label}
          </div>
        </div>
      ),
    },
    {
      title: (
        <button className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      align: "center",
      render: (action) => <TableActionButton href={`/clients/add/${action}`} />,
      className: "action-col",
    },
  ];

  const data = clientsList.map((client) => ({
    key: client.id,
    title: { title: client.clientName  + ' ' + client.clientSurname, id: client.id },
    phone: client.phones[0].phone,
    status: {
      isActive: true,
      label: "Активный",
    },
    action: client.id,
  }));

  return (
    <div className="border bg-white p-[20px] mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table className="clients-table" columns={columns} dataSource={data} />
    </div>
  );
};

export default ClientsTable;
