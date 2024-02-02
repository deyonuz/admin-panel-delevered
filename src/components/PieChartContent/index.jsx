import React from 'react'
import PieChart from '../PieChart'

const PieChartContent = ({color, p, text}) => {
  return (
    <div className='w-full flex items-center p-[24px] bg-white rounded-[6px]'>
      <PieChart color={color} p={p} />
      <div className="ml-[40px]">
        <p className="text-[#6E8BB7] text-[14px]">{text}</p>
        <h3 style={{color: color}} className={`mt-[8px] text-[40px] font-bold`}>{p}%</h3>
      </div>
    </div>
  )
}

export default PieChartContent