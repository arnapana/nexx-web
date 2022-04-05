import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner } from '@components/common'
import { CardVision, ButtonContact } from '@components/index'

const Aboutus: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/aboutus.png' />

      <BreadCrumb />
      <CardVision />
    </Container>
  )
}

export default Aboutus
