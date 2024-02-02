import { useState } from "react";

import DatePicker from "react-datepicker";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import "react-datepicker/dist/react-datepicker.css";

const DateOrder = () => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex items-center">
      <button className="text-[#6E8BB7] w-[32px] rounded-l-[6px] border bg-white border-r h-[32px] flex items-center justify-center">
        <FaChevronLeft />
      </button>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        monthsShown={2}
        maxDate={new Date()}
        showYearDropdown
        selectsRange
        className="h-[32px] border-y"
      />
      <button className="w-[32px] text-[#6E8BB7] bg-white border rounded-r-[6px] h-[32px] flex items-center justify-center">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default DateOrder;
