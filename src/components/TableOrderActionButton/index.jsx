import { Popover } from "antd";
import {Link} from "react-router-dom";
import { IoReloadOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaCar, FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { PiX } from "react-icons/pi";

const Content = ({id}) =>  (
  <div className="w-[251px]">
      <button className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#FDF5CA] text-[16px] rounded-[6px] text-[#D29404] p-[8px]">
          <IoReloadOutline />
        </div>
        <span className="text-black">Повторить выставить счет</span>
      </button>
      <button className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#F6EBFD] text-[16px] rounded-[6px] text-[#C479F3] p-[8px]">
          <FaCar />
        </div>
        <span className="text-black">Курьер отменил</span>
      </button>
      <Link to={`/order/add-order/${id}`} className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#E3EFFE] text-[16px] rounded-[6px] text-[#4094F7] p-[8px]">
          <MdEdit />
        </div>
        <span className="text-black">Изменить</span>
      </Link>
      <button className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#FEE8E6] text-[16px] rounded-[6px] text-[#F76659] p-[8px]">
          <PiX />
        </div>
        <span className="text-black">Отменено</span>
      </button>
      <button className="border-b w-full py-[8px] pr-[16px] flex items-center pl-[8px]">
        <div className="mr-[12px] bg-[#DDF6F1] text-[16px] rounded-[6px] text-[#1AC19D] p-[8px]">
          <FaCheck />
        </div>
        <span className="text-black">Завершить</span>
      </button>
  </div>
);
const TableOrderActionButton = ({id}) => {
  return (
    <Popover placement="bottomLeft" content={<Content id={id} />} trigger={"click"}>
      <button className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]">
        <BsThreeDots />
      </button>
    </Popover>
  );
};

export default TableOrderActionButton;
