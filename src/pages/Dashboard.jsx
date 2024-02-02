import { Tabs } from "antd";
import Aside from "../components/Aside";
import AreaChartContent from "../components/AreaChartContent";
import PieChartContent from "../components/PieChartContent";
import GraphicChartTwo from "../components/GraphicChartTwo";
import StatisticsCards from "../components/StatisticsCards";



const GraphicChartData = [
  {
    title: "Total orders this month",
    num: "1,850",
    percen: 5,
    isBenefit: false,
    chartColor: "#F8C51B",
    colorId: "gradiendId1",
  },
  {
    title: "Earning this month",
    num: "$6,250",
    percen: 25,
    isBenefit: true,
    chartColor: "#A23FEE",
    colorId: "gradiendId2",
  },
  {
    title: "Total orders this month",
    num: "$12,750",
    percen: 12,
    isBenefit: true,
    chartColor: "#F2271C",
    colorId: "gradiendId3",
  },
];

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="w-[calc(100%-64px)] h-screen overflow-y-auto">
        <div className="shadow-[0px_-1px_0px_0px_#E5E9EB_inset] h-[55px] pl-[32px] flex items-center">
          <h1 className="text-[24px] text-[#303940] font-semibold">
            Dashboard
          </h1>
        </div>
        <div className="px-[32px] py-[24px] bg-[#DCE9F9]">
          <StatisticsCards />
          <div className="flex gap-x-[20px] mt-[20px]">
            <div className="w-1/4 grid grid-row-3 gap-y-[20px]">
              {GraphicChartData.map((item, index) => (
                <AreaChartContent chartData={item} key={index} />
              ))}
            </div>
            <div className="w-3/4 flex flex-col">
              <div className="grid grid-cols-2 gap-x-[20px]">
                <PieChartContent text="Top Order" color={"#1AC19D"} p={75} />
                <PieChartContent
                  text="Average order"
                  color={"#A23FEE"}
                  p={40}
                />
              </div>
              <div className="flex flex-col h-full mt-[20px] w-full p-[20px] pb-[0] bg-white rounded-[6px]">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] font-semibold text-[#5B6871]">
                    Ежемесячная статистика
                  </h2>
                  <select
                    name=""
                    id=""
                    className="text-[#303940] px-[12px] py-[8px] w-[160px] border-2 rounded-[8px] border-[#E5E9EB]"
                  >
                    <option value="Июнь">Июнь</option>
                    <option value="Июль">Июль</option>
                  </select>
                </div>
                <GraphicChartTwo />
                <div className="mt-auto">
                  <Tabs
                    defaultActiveKey="1"
                    centered
                    className="text-[#4094F7]"
                    items={["Неделья", "Месяц", "Год"].map((item, i) => {
                      const id = String(i + 1);
                      return {
                        label: item,
                        key: id,
                      };
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] bg-white p-[20px]">
            <p style={{boxShadow: '0px -1px 0px 0px rgba(0, 0, 0, 0.06) inset'}} className="py-[16px] text-[18px] text-[#5B6871] font-semibold">Общий отчет</p>
            <table className="border-collapse mt-[20px] w-full border rounded-[6px] ">
              <thead>
                <tr className="border-b">
                  <th className="py-[8px]">Число</th>
                  <th className="py-[8px]">Доставка</th>
                  <th className="py-[8px]">Доставка</th>
                  <th className="py-[8px]">Самовывоз</th>
                  <th className="py-[8px]">Агрегаторы</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b">
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                </tr>
                <tr className="border-b">
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                </tr>
                <tr className="border-b">
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                  <td className="py-[14px] border-b">5555</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
