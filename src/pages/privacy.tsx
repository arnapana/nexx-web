import { NextPage } from 'next'
import { Container, BreadCrumb } from '@components/common'
import { ButtonContact } from '@components/index'

const Privacy: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <div className='container mx-auto'>
        <div className='mb-10'>
          <p className='font-prompts font-medium text-center 2xl:text-5xl 2xl:leading-[55px]'>นโยบายความเป็นส่วนตัว</p>
        </div>
        <div>
          {/* Header */}
          <div className='grid items-center px-8 h-[65px] text-white bg-primary rounded-2xl'>
            <p className='font-prompts font-medium 2xl:text-2xl telephamacy-title'>การประมวลผลข้อมูลส่วนบุคคล</p>
          </div>
          {/* Content */}
          <div className='font-sarabun text-xl font-light mb-32'></div>
        </div>
      </div>
      <style jsx>
        {`
          .telephamacy-title {
            position: relative;
          }
          .telephamacy-title::before {
            content: '';
            width: 11px;
            height: 11px;
            border-radius: 50%;
            margin-right: 10px;
            display: inline-block;
            background-color: #fff;
            vertical-align: middle;
          }
        `}
      </style>
    </Container>
  )
}

export default Privacy
