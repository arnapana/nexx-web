import React from 'react'
import { ColorLine, Button, Pagination } from '@components/common'

export const OurBranchContainer = () => {
  return (
    <section className='mb-32'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-14'>
          <div>
            <p className='text-center h2'>สาขาร้านยา NEXX Pharma</p>
          </div>

          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>
        <Button outerClassName='my-10' innerClassName='ml-auto' name='ค้นหาสาขา' />

        <div className='overflow-x-auto'>
          <table className='overflow-hidden mx-auto w-[65rem] rounded-[40px] border-collapse table-fixed'>
            <thead className='font-prompts font-medium text-white uppercase bg-[#3E3E3E]'>
              <tr>
                <th className='p-5 w-[12%]'>ลำดับ</th>
                <th className='p-5 w-[37%]'>ที่อยู่</th>
                <th className='p-5 w-[18%]'>เบอร์โทรศัพท์</th>
                <th className='p-5 w-[18%]'>เวลาทำการ</th>
                <th className='p-5 w-[15%]'>แผนที่</th>
              </tr>
            </thead>
            <tbody className='font-prompts text-xl text-center'>
              <tr className='h-[130px] odd:bg-[#F0F4FF]'>
                <td className='border border-[#D9D9D9]'>1</td>
                <td className='text-left border border-[#D9D9D9]'>
                  เน็กซ์ฟาร์มา สาขาบางบ่อ 225 ม.4 ตำบลบางบ่อ อำเภอบางบ่อ จังหวัดสมุทรปราการ 10560
                </td>
                <td className='text-primary underline border border-[#D9D9D9]'>065 523 5074</td>
                <td className='border border-[#D9D9D9]'>07:00-19:00</td>
                <td className='border border-[#D9D9D9]'>
                  <button className='p-2 w-[66px] h-[44px] text-white rounded-lg bg-secondary'>คลิก</button>
                </td>
              </tr>
            </tbody>
          </table>

          <Pagination pageCount={5} onChangePage={(val) => console.log(val)} />
        </div>
      </div>
      <style jsx>{`
        tr td {
          padding: 0px 20px 0px 20px;
        }
      `}</style>
    </section>
  )
}
