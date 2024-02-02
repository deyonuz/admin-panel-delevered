import {useState} from 'react'

const items = [
  {
    key: "currentOrders",
    label: "Текущие заказы",
    count: 1,
  },
  {
    key: "historyOfOrder",
    label: "История заказов",
    count: 10,
  },
]

const OrdersofClientTab = () => {

  const [tabItems, settabItems] = useState(items);
  const [activeOrderTabItem, setActiveOrderTabItem] = useState('currentOrders');

  return (
    <div className="flex gap-x-[12px] h-[56px] items-center border-b">
      {tabItems.map(({ key, label, count }) => (
        <button
          type='button'
          style={{
            boxShadow: `${
              activeOrderTabItem === key ? "0px -4px 0px 0px #3593F9 inset" : ""
            }`,
          }}
          onClick={() => setActiveOrderTabItem(key)}
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
  )
}

export default OrdersofClientTab