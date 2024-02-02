import { Tabs } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaArrowLeft, FaFolder, FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Aside from "../components/Aside";
import AddClientContent from "../components/AddClientContent";
import OrdersOfClientContent from "../components/OrdersOfClientContent";
import { setClient } from "../redux/slices/clientSlice";


const AddClientPage = () => {
  const { id } = useParams();
  const {clientName, clientSurname} = useSelector(state => state.clientState.client);
  const {clientsList} = useSelector(state => state.clientState);


  const dispatch = useDispatch();

  if(id) {
    const currentClient = clientsList.find(client => client.id.toString() === id);
    dispatch(setClient(currentClient));
    console.log(currentClient);
  }

  const tabItems = [
    { key: "1", label: "О клиенте", children: <AddClientContent /> },
    { key: "2", label: "Заказы", children: <OrdersOfClientContent /> },
  ];


  return (
    <div className="h-screen flex">
      <Aside />
      <form className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <div className="flex items-center text-[14px]">
            <Link to={"/clients"} className="flex items-center text-[#6E7C87]">
              <FaArrowLeft className="text-[#D5DADD]" />
              <FaFolder className="text-[#D5DADD] mx-[8px]" />
              Клиенты
            </Link>
            <FaChevronRight className="text-[12px] mx-[15px] text-[#B0BABF]" />
            <Link
              to={`/clients/add${id ? '/' + id : ''}`}
              className="text-[#252C32] flex items-center breadcrumb-item-active"
            >
              <FaFolder className="mr-[4px] text-[#4094F7]" />
              {clientName + ' ' + clientSurname}
            </Link>
          </div>
          <div className="flex h-full items-center px-[16px] border-l">
            <div className="text-[#F76659] text-[14px] font-medium h-full border-r px-[16px] flex items-center">
              <Link to={"/clients"} className="flex items-center">
                <TiDelete className="text-[20px] mr-[12px]" />
                <span>Отменить</span>
              </Link>
            </div>
            <button className="ml-[16px] flex items-center text-[14px] text-[#4094F7] font-medium">
              <FaSave className="text-[20px] mr-[12px]" />
              <span>Сохранить</span>
            </button>
          </div>
        </div>
        <Tabs items={tabItems} defaultActiveKey={tabItems[0].key} />
      </form>
    </div>
  );
};

export default AddClientPage;
