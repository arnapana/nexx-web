import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner, ColorLine, ImageLoader } from '@components/common'
import { ArticleContainer } from '@components/containers'
import { ButtonContact } from '@components/index'
import { AboutusContainer, VisionContainer } from '@containers/aboutus'

import aboutusConstant from '@constants/mock/aboutus.json'

const Aboutus: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/aboutus.png'>
        <div className='flex relative w-1/2'>
          <p className='font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] 2xl:text-8xl 2xl:leading-[90px]'>
            About 
            <p className='text-6xl leading-[90px]'>NEXX Pharma</p>
          </p>
          <div className='flex absolute top-[10%] right-1/3 items-center'><ImageLoader src="/images/carousel/left-arrow-green.png" width={137} height={85}/></div>
          
        </div>
        <div className='w-[50%]'>
          <p className='font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-[2.5rem] 2xl:leading-[55px]'>
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
          <div className='mb-3'>
            <p className='font-prompts font-medium text-center h2'>{aboutusConstant.activity.nameEn}</p>
          </div>
          <div className='mb-5'>
            <p className='font-prompts font-medium text-center h2'>{aboutusConstant.activity.nameTh}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 mb-7 mt-4' />
        </div>
        <ArticleContainer />
      </div>
    </Container>
  )
}

export default Aboutus
