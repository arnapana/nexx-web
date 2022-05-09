import { NextPage } from 'next'
import classNames from 'classnames'
import { Container, BreadCrumb, HeroBanner, ColorLine, ImageLoader, PageSEO } from '@components/common'
import { ArticleContainer } from '@components/containers'
import { ButtonContact } from '@components/index'
import { AboutusContainer, VisionContainer } from '@containers/aboutus'

import aboutusConstant from '@constants/mock/aboutus.json'

const Aboutus: NextPage = () => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - About Nexx Phamacy`} description='เกี่ยวกับเรา NEXX Pharma' />
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/aboutus.png' srcMobile='/images/hero-banner/aboutus-mobile.png'>
        <div className='flex relative flex-col mb-5 md:mb-8'>
          <div className='mb-3'>
            <p
              className={classNames(
                'text-[2.5rem] font-poppins font-semibold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
                'md:text-[5rem]',
                '2xl:text-8xl 2xl:leading-[90px]'
              )}
            >
              About
            </p>
          </div>
          <div className=''>
            <p
              className={classNames(
                'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
                'md:text-[3rem]',
                '2xl:text-6xl 2xl:leading-[90px]'
              )}
            >
              NEXX Pharma
            </p>
          </div>
          <div
            className={classNames(
              'absolute top-[15%] right-[20%] items-center w-[55px] h-[35px]',
              'md:right-0 md:w-[110px] md:h-[65px]',
              '2xl:right-[30%] 2xl:top-[5%] 2xl:w-[137px] 2xl:h-[85px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[300px] md:w-[400px] 2xl:w-[700px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
              'md:text-[1.5rem] md:leading-8',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
            ร้านขายยา วิตามิน และสินค้าสุขภาพครบวงจร ผสานเทคโนโลยีเพื่อตอบโจทย์การให้บริการ อย่างมีประสิทธิภาพ
          </p>
        </div>
      </HeroBanner>

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <AboutusContainer />
      <VisionContainer />
      <div>
        {/* Header */}
        <div className='mb-16'>
          <div className=''>
            <p className='font-kanits font-medium leading-10 text-center h2'>{aboutusConstant.activity.nameEn}</p>
          </div>
          <div className=''>
            <p className='font-kanits font-medium leading-relaxed text-center h2'>{aboutusConstant.activity.nameTh}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 mb-7 mt-4' />
        </div>
        <ArticleContainer />
      </div>
    </Container>
  )
}

export default Aboutus
