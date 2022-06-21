import { NextPage } from 'next'
import { IBranch } from 'pages/stores'
import React from 'react'

interface Props {
  val: IBranch
}

export const TableField: NextPage<Props> = ({ val }) => {
  return (
    <tr className='h-[80px] odd:bg-[#F0F4FF] md:h-[120px]'>
      <td className=''>
        <p className='font-prompts text-sm md:text-lg'>{val?.order}</p>
      </td>
      <td className='px-5 text-left '>
        <p className='font-prompts text-sm md:text-lg'>{val?.name}</p>
        <p className='font-prompts text-sm md:text-lg'>{val?.address}</p>
      </td>
      <td className='text-primary underline '>
        <p className='font-prompts text-sm md:text-lg'>{val?.phone}</p>
      </td>
      <td className=''>
        <p className='font-prompts text-sm md:text-lg'>{val?.timeOpen}</p>
      </td>
      <td className=''>
        <button className='p-2 w-[60px] h-[40px] text-white rounded-lg md:w-[66px] md:h-[44px] bg-secondary'>
          <p className='text-sm md:text-lg'>
            <a target='_blank' rel='noopener noreferrer' href={`${val.url || ''}`}>
              คลิก
            </a>
          </p>
        </button>
      </td>
    </tr>
  )
}
