import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import TableActionButton from "../TableActionButton";

import NegativeImg from "../../assets/negative.png";
import PositiveImg from "../../assets/positive.png";

const ReviewsTable = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "title",
    },
    {
      title: "Тип",
      dataIndex: "typeReview",
      align: "center",
      render: (type) => (
        <div className="flex justify-center">
          <img src={type ? PositiveImg : NegativeImg} alt="" />
        </div>
      ),
    },
    {
      title: "Статус",
      align: "center",
      dataIndex: "status",
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
      align: "center",
      dataIndex: "action",
      render: () => <TableActionButton href="/marketing/reviews/add" />,
      className: "action-col",
    },
  ];
  const data = [
    {
      key: "1",
      title: "😉 Курьер молодец",
      typeReview: true,
      status: {
        isActive: true,
        label: "Активный",
      },
    },
    {
      key: "2",
      title: "😉 Курьер молодец",
      typeReview: false,
      status: {
        isActive: true,
        label: "Активный",
      },
    },
    {
      key: "3",
      title: "😉 Курьер молодец",
      typeReview: false,
      status: {
        isActive: true,
        label: "Активный",
      },
    },
  ];

  return (
    <div className="border bg-white p-[20px] mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table className="clients-table" columns={columns} dataSource={data} />
    </div>
  );
};

export default ReviewsTable;
