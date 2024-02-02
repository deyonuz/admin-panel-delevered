import { Table } from "antd";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";

const CatalogProductsTable = () => {
  const columns = [
    {
      title: "Наименование продукта",
      dataIndex: "title",
    },
    {
      title: "Описание",
      dataIndex: "description",
    },
    {
      title: "Цена",
      dataIndex: "price",
      align: 'center',
    },
    {
      title: (
        <button
          type="button"
          className="p-[4px] text-[20px] border border-[#E5E9EB] text-[#4094F7] rounded-[6px]"
        >
          <BsThreeDots />
        </button>
      ),
      dataIndex: "action",
      render: () => <TableActionButton href="/settings/company/branches/add" />,
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      title: "Lavash",
      price: 17000,
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
    },
    {
      key: "2",
      title: "Lavash",
      price: 17000,
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
    },
    {
      key: "3",
      title: "Lavash",
      price: 17000,
      description:
        "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...",
    },
  ];

  return (
    <div className="mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CatalogProductsTable;
