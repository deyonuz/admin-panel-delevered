import { Table } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdImageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import TableActionButton from "../TableActionButton";

const BannersTabel = () => {
  const columns = [
    {
      title: "Изображение",
      dataIndex: "imgUrl",
      align: "center",
      render: (url) => (
        <div className="justify-center flex">
          <img
            className="w-[80px] h-[80px] rounded-[6px]"
            src={url}
            alt="banner-img"
          />
        </div>
      ),
    },
    {
      title: "Hазвание на узбекском",
      dataIndex: "bannerUz",
    },
    {
      title: "Hазвание на русском",
      dataIndex: "bannerRu",
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
      render: () => <TableActionButton href="/marketing/banners/add" />,
      className: "action-col",
      align: "center",
    },
  ];
  const imgSrc =
    "https://images.unsplash.com/photo-1491472253230-a044054ca35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D";

  const data = [
    {
      key: "1",
      imgUrl: imgSrc,
      bannerUz: "Баннер 1",
      bannerRu: "Баннер 1",
      status: {
        isActive: true,
        label: "Активный",
      },
    },
    {
      key: "2",
      imgUrl: imgSrc,
      bannerUz: "Баннер 1",
      bannerRu: "Баннер 1",
      status: {
        isActive: true,
        label: "Активный",
      },
    },
    {
      key: "3",
      imgUrl: imgSrc,
      bannerUz: "Баннер 1",
      bannerRu: "Баннер 1",
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

export default BannersTabel;
