import React from 'react'

export const TableField = () => {
  return (
    <tr className='h-[100px] odd:bg-[#F0F4FF] md:h-[130px]'>
      <td className='border border-[#D9D9D9]'>
        <p>1</p>
      </td>
      <td className='px-5 text-left border border-[#D9D9D9]'>
        <p className='font-prompts text-lg md:text-xl'>เน็กซ์ฟาร์มา สาขาบางบ่อ</p>
        <p className='font-prompts text-lg md:text-xl'> 225 ม.4 ตำบลบางบ่อ อำเภอบางบ่อ จังหวัดสมุทรปราการ 10560</p>
      </td>
      <td className='text-primary underline border border-[#D9D9D9]'>
        <p className='font-prompts text-lg md:text-xl'>065 523 5074</p>
      </td>
      <td className='border border-[#D9D9D9]'>
        <p className='font-prompts text-lg md:text-xl'>07:00-19:00</p>
      </td>
      <td className='border border-[#D9D9D9]'>
        <button className='p-2 w-[66px] h-[44px] text-white rounded-lg bg-secondary'>
          <p>คลิก</p>
        </button>
      </td>
    </tr>
  )
}
