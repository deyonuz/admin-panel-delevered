import { NavLink } from 'react-router-dom'
import { MdAnalytics, MdShoppingCart, MdShoppingBasket } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { BiSolidCategory } from "react-icons/bi";
import Notifications from "../../assets/notifications.svg";
import Ellipse from "../../assets/Ellipse.png";
import { setIsOpenMenu, setIsOpenSettingsMenu } from '../../redux/slices/orderSlice';

const links = [
  {href: '/dashboard', icon: <MdAnalytics />},
  {href: '/order', icon: <MdShoppingCart /> },
  {href: '/clients', icon: <HiUsers />},
  {href: '/marketing', icon: <MdShoppingBasket />},
  {href: '/settings', icon: <RiSettings3Fill />},
]

const Aside = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[64px] border-r bg-white p-[12px] flex flex-col">
      <div className="w-[40px] text-[22px] font-semibold  cursor-pointer rounded-full text-white flex items-center justify-center h-[40px] bg-[#0E73F6]">
        D
      </div>
      <div className="flex flex-col mt-[24px] bg-[#F0F3F8] rounded-[6px]">
        <NavLink
          to={"/dashboard"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <MdAnalytics />
        </NavLink>
        <NavLink
          to={"/order"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <MdShoppingCart />
        </NavLink>
        <NavLink
          to={"/clients"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <HiUsers />
        </NavLink>
        <NavLink
          onClick={() => dispatch(setIsOpenMenu(true))}
          to={"/marketing"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <MdShoppingBasket />
        </NavLink>
        <NavLink
          onClick={() => dispatch(setIsOpenSettingsMenu(true))}
          to={"/settings"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <RiSettings3Fill />
        </NavLink>
        <NavLink
          to={"/menu"}
          className="navlink w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
        >
          <BiSolidCategory />
        </NavLink>
      </div>
      <div className="mt-auto flex flex-col items-center">
        <img src={Notifications} className="cursor-pointer" alt="notify" />
        <div className="mt-[24px] w-[40px] h-[40px] rounded-full cursor-pointer">
          <img src={Ellipse} alt="ellipse" />
        </div>
      </div>
    </div>
  );
}

export default Aside