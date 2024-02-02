import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveOrderTabItem, setFilteredOrderList } from "../../redux/slices/orderSlice";

const items = [
  {
    key: "courierOnWay",
    label: "Курьер в пути",
    count: 10,
  },
  {
    key: "new",
    label: "Новый",
    count: 12,
  },
  {
    key: "operatorAccepted",
    label: "Оператор принял",
    count: 12,
  },
  {
    key: "blank",
    label: "Загатовка",
    count: 5,
  },
  {
    key: "completed",
    label: "Завершен",
    count: 120,
  },
  {
    key: "all",
    label: "Все заказы",
    count: 1,
  },
];

const OrderTabs = () => {
  const [tabItems, setTabItems] = useState(items);

  const { orderList, activeOrderTabItem } = useSelector((state) => state.orderState);

  const dispatch = useDispatch();

  const newTabItems = tabItems.map((item) => (
    {
      ...item,
      count:
        item.key === "all"
          ? orderList.length
          : orderList.filter(({ status }) => status === item.key).length,
    }
  ));

  const handleChangeActive = (key) => {
    dispatch(setActiveOrderTabItem(key));
    dispatch(setFilteredOrderList(key));
  };

  return (
    <div className="flex gap-x-[12px] h-[56px] items-center border-b">
      {newTabItems.map(({ key, label, count }) => (
        <button
          style={{
            boxShadow: `${
              activeOrderTabItem === key ? "0px -4px 0px 0px #3593F9 inset" : ""
            }`,
          }}
          onClick={() => handleChangeActive(key)}
          className={`h-full text-[14px] font-medium flex items-center ${
            activeOrderTabItem === key ? "text-[#4094F7]" : "text-[#6E8BB7]"
          }`}
          key={key}
        >
          <span>{label}</span>
          <div
            className={`${
              activeOrderTabItem === key ? "bg-[#4094F7]" : "bg-[#6E8BB7BF]"
            } font-semibold text-[12px] text-white ml-[8px] h-[24px] px-[8px] flex items-center justify-center rounded-full`}
          >
            {count}
          </div>
        </button>
      ))}
    </div>
  );
};

export default OrderTabs;
