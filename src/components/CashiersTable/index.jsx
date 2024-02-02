import { Table } from "antd";
import { BsThreeDots } from "react-icons/bs";
import TableActionButton from "../TableActionButton";

const CashiersTable = ({activeKey}) => {
  const columns = [
    {
      title: "Полное имя",
      dataIndex: "fullName",
    },
    {
      title: "Логин",
      dataIndex: "login",
      align: "center",
    },
    {
      title: "Номер телефона",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "Должность",
      dataIndex: "job",
      align: "center",
      render: (job) => (
        <div className="flex justify-center">
          <div
            className={`
                text-[#4094F7] bg-[#4094F726]
            font-medium text-[14px] w-[144px] h-[24px] flex items-center justify-center rounded-[6px]`}
          >
            {job}
          </div>
        </div>
      ),
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
      render: () => (
        <TableActionButton
          href={`/settings/company/branches/personal/${
            activeKey === "1" ? "courier" : "cashier"
          }`}
        />
      ),
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      fullName: "Халдарова Мухлиса",
      login: "Muhlisa89",

      phone: "+998 (90) 123-45-67",
      job: "Кассир Oqtepa",
    },
    {
      key: "2",
      fullName: "Халдарова Мухлиса",
      login: "Muhlisa89",

      phone: "+998 (90) 123-45-67",
      job: "Кассир Oqtepa",
    },
  ];

  return (
    <div className="mt-[20px] rounded-[6px] w-full overflow-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CashiersTable;
