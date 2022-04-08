import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner, ColorLine } from '@components/common'
import { ArticleContainer } from '@components/containers'
import { ButtonContact } from '@components/index'
import { AboutusContainer, VisionContainer } from '@containers/aboutus'

import aboutusConstant from '@constants/mock/aboutus.json'

const Aboutus: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/aboutus.png' />

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
