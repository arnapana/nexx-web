import { ColorLine, Button } from '@components/common'
import React from 'react'

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
          <table className='w-full rounded-3xl'>
            <thead className='h-[77px] font-prompts font-medium text-white uppercase bg-[#3E3E3E]'>
              <tr>
                <th>ลำดับ</th>
                <th>ที่อยู่</th>
                <th>เบอร์โทรศัพท์</th>
                <th>เวลาทำการ</th>
                <th>แผนที่</th>
              </tr>
            </thead>
            <tbody className='font-prompts text-xl'>
              <tr className='odd:bg-[#F0F4FF] h-[130px]'>
                <td>1</td>
                <td>เน็กซ์ฟาร์มา สาขาบางบ่อ 225 ม.4 ตำบลบางบ่อ อำเภอบางบ่อ จังหวัดสมุทรปราการ 10560</td>
                <td>065 523 5074</td>
                <td>07:00-19:00</td>
                <td>
                  <button className='p-2 w-[66px] h-[44px] text-white rounded-lg bg-secondary'>คลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
