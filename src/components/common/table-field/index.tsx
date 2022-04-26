import React from 'react'

export const TableField = () => {
  return (
    <tr className='h-[80px] odd:bg-[#F0F4FF] md:h-[120px]'>
      <td className=''>
        <p className='font-prompts text-sm md:text-lg'>1</p>
      </td>
      <td className='px-5 text-left '>
        <p className='font-prompts text-sm md:text-lg'>เน็กซ์ฟาร์มา สาขาบางบ่อ</p>
        <p className='font-prompts text-sm md:text-lg'> 225 ม.4 ตำบลบางบ่อ อำเภอบางบ่อ จังหวัดสมุทรปราการ 10560</p>
      </td>
      <td className='text-primary underline '>
        <p className='font-prompts text-sm md:text-lg'>065 523 5074</p>
      </td>
      <td className=''>
        <p className='font-prompts text-sm md:text-lg'>07:00-19:00</p>
      </td>
      <td className=''>
        <button className='p-2 w-[60px] h-[40px] md:w-[66px] md:h-[44px] text-white rounded-lg bg-secondary'>
          <p className='text-sm md:text-lg'>คลิก</p>
        </button>
      </td>
    </tr>
  )
}
