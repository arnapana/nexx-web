import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb } from '@components/common'

const Stores: NextPage = () => {
  return (
    <Container>
      <HeroBanner src='/images/hero-banner/stores.png' />
      <BreadCrumb />

      <table className='overflow-hidden w-full rounded-3xl'>
        <thead className='hidden h-[77px] font-prompts font-medium text-white bg-[#3E3E3E] lg:block'>
          <tr className='grid lg:grid-cols-5'>
            <th>ลำดับ</th>
            <th>ที่อยู่</th>
            <th>เบอร์โทรศัพท์</th>
            <th>เวลาทำการ</th>
            <th>แผนที่</th>
          </tr>
        </thead>
        <tbody className='font-prompts text-xl'>
          <tr className='grid md:grid-cols-1 xl:grid-cols-5'>
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
      <style jsx>{`
        th,
        td {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </Container>
  )
}

export default Stores
