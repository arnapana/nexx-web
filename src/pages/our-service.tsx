import { NextPage } from 'next'
import classNames from 'classnames'
import { Container, HeroBanner, BreadCrumb, ImageLoader } from '@components/common'
import { ButtonContact } from '@components/index'
import { SocialContact } from '@components/containers'
import { OurServiceContainer } from '@containers/ourservice'

const OurService: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/our-service.png' containerClassName='top-[26%]'>
        <div className='flex relative mb-10'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem]',
              '2xl:text-[80px] 2xl:leading-[90px]'
            )}
          >
            Our Services
          </p>
          <div
            className={classNames(
              'absolute top-[10%] -right-[15%] items-center w-[55px] h-[35px]',
              'md:top-0 md:w-[84px] md:h-[52px]',
              '2xl:top-[30%] 2xl:w-[84] 2xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[250px] md:w-[450px] 2xl:w-[600px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
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
