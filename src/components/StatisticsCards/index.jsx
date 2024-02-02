import React from "react";
import ShopIcon from "../../assets/Shop.svg";
import Users from "../../assets/Users.svg";
import NotifyBlue from "../../assets/notifications-blue.svg";
import DirectionsCar from "../../assets/directions_car.svg";

const StatisticsCards = () => {
  const NumbersData = [
    {
      num: "24",
      title: "Филиалы",
      icon: ShopIcon,
    },
    {
      num: "110,823",
      title: "Клиенты",
      icon: Users,
    },
    {
      num: "110,823",
      title: "Подписчики",
      icon: NotifyBlue,
    },
    {
      num: "75",
      title: "Курьеры",
      icon: DirectionsCar,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-[20px]">
      {NumbersData.map((item, index) => (
        <div
          key={index}
          className="w-full p-[24px] h-[120px] rounded-[6px] bg-white flex items-center justify-between"
        >
          <div className="flex flex-col h-full">
            <h6 className="text-[24px] text-[#4094F7] font-bold">{item.num}</h6>
            <span className="block mt-auto text-[14px] text-[#6E8BB7] ">
              {item.title}
            </span>
          </div>
          <div className="w-[72px] h-[72px] bg-[rgba(64,148,247,0.15)] flex items-center justify-center rounded-[6px]">
            <img src={item.icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;
