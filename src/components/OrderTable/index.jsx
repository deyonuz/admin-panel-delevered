import { useState } from "react";
import TableActionButton from "../TableOrderActionButton";
import { Table } from "antd";
import { useSelector } from "react-redux";



const OrderTable = ({columns}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { filteredOrderList } = useSelector((state) => state.orderState);
  
  const data = filteredOrderList.map((order, index) => ({
    key: order.orderId,
    num: index + 1,
    client: { name: order.client.name, phone: order.client.phones[0].phone },
    orderId: order.orderId,
    timer: order.timer,
    kuryer: order.payment.courier,
    part: { name: order.client.name, phone: order.client.phones[0].phone },
    type: order.orderType,
    price: order.allPrice,
    address: order.address,
    action: order.orderId,
  }));
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="mt-[20px] pr-[20px]">
      <div className="border rounded-[6px] w-full overflow-auto">
        <Table
          rowSelection={rowSelection}
          columns={columns.filter(column => column.show)}
          dataSource={data}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default OrderTable;
