import { Table } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom';

const OrdersofClientTable = () => {


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Дата создание",
      dataIndex: "orderDate",
    },
    {
      title: "Адресс клиента",
      dataIndex: "clientAddress",
    },
    {
      title: 'Сумма',
      dataIndex: "price",
    },
    {
      title: 'Оператор',
      dataIndex: "operator",
      render: (operator) => (
        <div className="text-[14px]">
          <p className="text-[#303940] mb-[8px]">{operator.name}</p>
          <a
            href={`tel:${operator.phone}`}
            className="text-[#4094F7] font-medium"
          >
            {operator.phone}
          </a>
        </div>
      ),
    },
    {
      title: 'Филиал',
      dataIndex: "branch",
    },
    {
      title: 'Тип доставки',
      dataIndex: "typeOrder",
      render: (typeOrder) => (
        <div className="bg-[#F8DD4E4D] rounded-[6px] text-[#D29404] font-medium text-center py-[4px] px-[12px]">
          {typeOrder}
        </div>
      ),
    },
    {
      title: 'Источник',
      dataIndex: "source",
      render: (source) => (
        <div className="bg-[#C479F326] rounded-[6px] text-[#A23FEE] font-medium text-center py-[4px] px-[12px]">
          {source}
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      id: '255024',
      orderDate: '10.03.2021',
      clientAddress: 'Ташкент г. Алмазар р. Янги Алмазар у. 51',
      price: '1 000 000 сум',
      operator: {
        name: 'Абдумансуров Абдукаххор',
        phone: '+998 (90) 123-45-67'
      },
      branch: 'Oqtepa',
      typeOrder: 'Доставка',
      source: 'Телеграм бот'
    }
  ]



  return (
    <div className="mt-[20px] pr-[20px]">
      <div className="border rounded-[6px] w-full overflow-auto">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
        />
      </div>
    </div>
  )
}

export default OrdersofClientTable