import React from 'react'

export const TableField = () => {
  return (
    <tr className='h-[130px] odd:bg-[#F0F4FF]'>
      <td className='border border-[#D9D9D9]'>1</td>
      <td className='px-5 text-left border border-[#D9D9D9]'>
        <p>เน็กซ์ฟาร์มา สาขาบางบ่อ</p> 225 ม.4 ตำบลบางบ่อ อำเภอบางบ่อ จังหวัดสมุทรปราการ 10560
      </td>
      <td className='text-primary underline border border-[#D9D9D9]'>065 523 5074</td>
      <td className='border border-[#D9D9D9]'>07:00-19:00</td>
      <td className='border border-[#D9D9D9]'>
        <button className='p-2 w-[66px] h-[44px] text-white rounded-lg bg-secondary'>คลิก</button>
      </td>
    </tr>
  )
}
