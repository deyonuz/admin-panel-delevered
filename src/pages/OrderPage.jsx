import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { Popover } from "antd";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaPlus, FaTableColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import DateOrder from "../components/DateOrder";
import OrderTable from "../components/OrderTable";
import OrderTableCols from "../components/OrderTableCols";
import OrderTabs from "../components/OrderTabs";
import { searchOrderItems, setDateOrderCreatedAt } from "../redux/slices/orderSlice";
import SearchInput from '../components/SearchInput';
import TableOrderActionButton from '../components/TableOrderActionButton';


const OrderPage = () => {
  const columnsTable = [
    {
      title: "№",
      dataIndex: "num",
      show: true,
    },
    {
      title: "Клиент",
      show: true,
      dataIndex: "client",
      render: (client) => (
        <div className="text-[14px]">
          <p className="text-[#303940] mb-[8px]">{client.name}</p>
          <a
            href={`tel:${client.phone}`}
            className="text-[#4094F7] font-medium"
          >
            {client.phone}
          </a>
        </div>
      ),
    },
    {
      title: "Ид.заказа",
      show: true,
      dataIndex: "orderId",
    },
    {
      title: "Таймер",
      show: true,
      dataIndex: "timer",
      render: (timer) => (
        <div className="bg-[#38D9B933] rounded-[6px] text-[#1AC19D] font-medium text-center py-[4px] px-[12px]">
          {timer}
        </div>
      ),
    },
    {
      title: "Курьер",
      show: true,
      dataIndex: "kuryer",
    },
    {
      title: "Филиал",
      dataIndex: "part",
      show: true,
      render: (client) => (
        <div className="text-[14px]">
          <p className="text-[#303940] mb-[8px]">{client.name}</p>
          <a
            href={`tel:${client.phone}`}
            className="text-[#4094F7] font-medium"
          >
            {client.phone}
          </a>
        </div>
      ),
    },
    {
      title: "Тип доставки",
      show: true,
      dataIndex: "type",
      render: (type) => (
        <div className="bg-[#F8DD4E4D] rounded-[6px] text-[#D29404] font-medium text-center py-[4px] px-[12px]">
          {type}
        </div>
      ),
    },
    {
      title: "Цена заказа",
      show: true,
      dataIndex: "price",
      render: (price) => price + " сум",
    },
    {
      title: "Адресс клиента",
      dataIndex: "address",
      show: true,
    },
    {
      title: "Action",
      show: true,
      dataIndex: "action",
      render: (action) => <TableOrderActionButton id={action} />,
      className: "action-col",
    },
  ];
  const [columns, setColumns] = useState(columnsTable);
  const [searchVal, setSearchVal] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickAddOrder = () => {
    const id = Date.now();

    function getCurrentDateTimeString() {
      const currentDate = new Date();
      
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      
      const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
      return dateTimeString;
    }
    
    const dateString = getCurrentDateTimeString();

    dispatch(setDateOrderCreatedAt(dateString));
    navigate(`/order/add-order/${id}`);
  }

  const handleChangeSearchVal = evt => {
    setSearchVal(evt.target.value);
    dispatch(searchOrderItems(evt.target.value));
  }

  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
          <h1 className="text-[20px] text-[#303940] font-semibold">Заказы</h1>
          <button onClick={handleClickAddOrder} to={`/order/add-order`} className="border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]">
            <FaPlus className="mr-[12px]" />
            Добавить
          </button>
        </div>
        <div className="px-[20px] flex items-center justify-between py-[12px] bg-[#F7F9FB]">
          <SearchInput value={searchVal} onChange={handleChangeSearchVal} />
          <div className="flex items-center">
            <DateOrder />
            <Popover trigger={'click'} placement={'bottomLeft'} content={<OrderTableCols setColumns={setColumns} columns={columns}  />}>
              <button type="button" className="ml-[24px] text-[#303940] flex items-center">
                <FaTableColumns className="mr-[12px]" />
                Столбцы
              </button>
            </Popover>
            <div className="ml-[24px]">
              <Link to={'/order/filter'} className="text-[#303940] flex items-center">
                <FaFilter className="mr-[12px]" />
                Фильтр
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#DCE9F9] p-[20px]">
          <div className="bg-white rounded-[6px] pl-[20px]">
            <OrderTabs />
            <OrderTable columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
