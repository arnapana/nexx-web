import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner } from '@components/common'
import { ArticleContainer } from '@components/containers'
import { ButtonContact } from '@components/index'
import { AboutusContainer, VisionContainer } from '@containers/aboutus'

const Aboutus: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/aboutus.png' />

      <BreadCrumb outerClassName='container mx-auto' />
      <AboutusContainer />
      <VisionContainer />
      <ArticleContainer />
    </Container>
  )
}

export default Aboutus
