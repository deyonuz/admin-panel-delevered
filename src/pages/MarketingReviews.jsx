import { FaFilter, FaPlus } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import ReviewsTable from "../components/ReviewsTable";

const MarketingReviews = () => {
  return (
    <div>
      <div className="bg-white h-[64px] border-b pl-[20px] flex items-center justify-between">
        <h1 className="text-[18px] text-[#303940] font-semibold">
          Список отзывов
        </h1>
        <Link
          to={`/marketing/reviews/add`}
          className="border-l flex items-center py-[12px] px-[20px] text-[14px] text-[#1AC19D]"
        >
          <FaPlus className="mr-[12px]" />
          Добавить
        </Link>
      </div>
      <div className="px-[20px] flex items-center justify-end py-[12px] bg-[#F7F9FB]">
        <Link to={"/"} className="text-[#303940] flex items-center">
          <FaFilter className="mr-[12px]" />
          Фильтр
        </Link>
      </div>
      <div className="px-[20px]">
        <ReviewsTable />
      </div>
    </div>
  );
};

export default MarketingReviews;
