import {Routes, Route, Outlet} from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Aside from "../components/Aside";
import DeleverImg from "../assets/Delever.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenMenu } from "../redux/slices/orderSlice";
import MarketingShares from "./MarketingShares";

const MarketingPage = () => {
  const {isOpenMenu} = useSelector(state => state.orderState);

  const dispatch = useDispatch();

  return (
    <div className="h-screen flex">
      <Aside />
      <div className="relative w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div
          className={`bg-white p-[16px] transition-transform w-[216px] duration-300 border-r absolute left-0 top-0 h-screen ${
            isOpenMenu ? "translate-x-0" : "translate-x-[-216px]"
          }`}
        >
          <div className="flex items-center justify-between pt-[10px]">
            <img src={DeleverImg} alt="logo delever" />
            <button onClick={() => dispatch(setIsOpenMenu(false))} type="button" className="">
              <MdMenuOpen className="text-[20px] text-[#5B77A0]" />
            </button>
          </div>
          <ul className="mt-[35px]">
            <li>
              <NavLink
                className={
                  "submenu-link text-[#252C32] rounded-[6px] mb-[8px] pl-[16px] py-[8px] font-medium block text-[14px]"
                }
                to={"/marketing/shares"}
              >
                Акции
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "submenu-link text-[#252C32] rounded-[6px] mb-[8px] pl-[16px] py-[8px] font-medium block text-[14px]"
                }
                to={"/marketing/banners"}
              >
                Баннеры
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "submenu-link text-[#252C32] rounded-[6px] mb-[8px] pl-[16px] py-[8px] font-medium block text-[14px]"
                }
                to={"/marketing/reviews"}
              >
                Отзывы
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`transition-padding w-full duration-300 ${isOpenMenu ? 'pl-[216px]' : 'pl-0'} `}>
          {
            <Outlet />
          }
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
