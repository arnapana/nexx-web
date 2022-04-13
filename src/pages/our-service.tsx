import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb, ImageLoader } from '@components/common'
import { ButtonContact } from '@components/index'
import { SocialContact } from '@components/containers'
import { OurServiceContainer } from '@containers/ourservice'

const OurService: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/our-service.png'>
        <div className='flex relative mb-10'>
          <p className='font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] 2xl:text-[80px] 2xl:leading-[90px]'>
            Our Services
          </p>
          <div className='flex absolute top-[30%] right-1/3 items-center'>
            <ImageLoader src='/images/carousel/left-arrow-green.png' width={84} height={52} />
          </div>
        </div>
        <div className='w-[54%]'>
          <p className='font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-[2.5rem] 2xl:leading-[55px]'>
            สุขภาพที่ดีที่ทุกคนเข้าถึงได้ ด้วยบริการจาก NEXX Pharma
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <OurServiceContainer />

      <SocialContact />
    </Container>
  )
}

export default OurService
