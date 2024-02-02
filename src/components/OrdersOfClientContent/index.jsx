import React from 'react'
import OrdersofClientTab from '../OrdersofClientTab'
import OrdersofClientTable from '../OrdersofClientTable'

const OrdersOfClientContent = () => {
  return (
    <div className='mt-[20px] bg-white pl-[20px] py-[16px] rounded-[6px]'>
      <OrdersofClientTab />
      <OrdersofClientTable />
    </div>
  )
}

export default OrdersOfClientContent