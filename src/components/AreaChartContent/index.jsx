import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import GraphicChart from "../GraphicChart";

const AreaChartContent = ({ chartData }) => {
  const { title, num, percen, isBenefit, chartColor, colorId } = chartData;

  return (
    <div className="w-full flex flex-col h-[227px] p-[24px] bg-white rounded-[6px] ">
      <p className="text-[#6E8BB7] text-[14px] ">{title}</p>
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-bold text-[#303940] ">{num}</h2>
        <div
          className={`flex mt-[8px] py-[8px] pl-[12px] pr-[8px] items-center ${
            !isBenefit ? "bg-[#F2271C1A]" : "bg-[#1AC19D26]"
          }  rounded-[12px]`}
        >
          <span
            className={`text-[14px] font-semibold ${
              isBenefit ? "text-[#1AC19D]" : "text-[#F2271C]"
            }`}
          >
            {`${isBenefit ? "+" : "-"}` + percen + "%"}
          </span>
          <span
            className={`ml-[8px] h-[24px] w-[24px] flex items-center justify-center rounded-full ${
              !isBenefit ? "bg-[#F2271C26]" : "bg-[#1AC19D33]"
            } `}
          >
            {!isBenefit ? (
              <FaAngleDown className="text-[#F2271C] text-[14px] " />
            ) : (
              <FaAngleUp className="text-[#1AC19D] text-[14px] " />
            )}
          </span>
        </div>
      </div>
      <div className="mt-[16px]">
        <GraphicChart chartColor={chartColor} colorId={colorId} />
      </div>
    </div>
  );
};

export default AreaChartContent;
