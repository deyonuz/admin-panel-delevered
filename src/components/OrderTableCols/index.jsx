import { Switch } from "antd";
import { FaSearch } from "react-icons/fa";

const orderTableCols = [
  {
    title: '№',
    isChecked: true,
  },
  {
    title: 'Клиент',
    isChecked: true,
  },
  {
    title: 'Ид.заказа',
    isChecked: true,
  },
  {
    title: 'Таймер',
    isChecked: true,
  },
  {
    title: 'Курьер',
    isChecked: true,
  },
  {
    title: 'Филиал',
    isChecked: true,
  },
  {
    title: 'Тип доставки',
    isChecked: true,
  },
  {
    title: 'Цена заказа',
    isChecked: true,
  },
]

const OrderTableCols = ({columns, setColumns}) => {

  const handleChangeToggle = (checked, index) => {
    setColumns((prevColumns) => 
      prevColumns.map((column, i) => i === index ? {...column, show: checked} : column)
      )
  }

  return (
    <div className="rounded-[6px] w-[316px] bg-[#F7F9FB] text-[#303940]">
      <div className="py-[12px] px-[16px]">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Поиск"
            className="block border text-[#9AA6AC] text-[14px] h-[32px] border-[#E5E9EB] rounded-[6px] w-full pl-[32px]"
          />
          <FaSearch className="absolute left-[8px] text-[#9AA6AC]" />
        </div>
      </div>
      <div className="">
        {
          columns.map((({show, title}, index) => (
            <div className="px-[16px] h-[48px] flex items-center justify-between border-t" key={title}>
              <h4 className="text-[#303940] text-[14px] font-medium">{title}</h4>
              <Switch checked={show} onChange={(checked) => handleChangeToggle(checked, index)} />
            </div>
          )))
        }
      </div>
    </div>
  );
};

export default OrderTableCols;
