import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb } from '@components/common'
import { ButtonContact } from '@components/index'
import { SocialContact } from '@components/containers'
import { OurServiceContainer } from '@containers/ourservice'

const OurService: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/our-service.png' />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <OurServiceContainer />

      <SocialContact />
    </Container>
  )
}

export default OurService
