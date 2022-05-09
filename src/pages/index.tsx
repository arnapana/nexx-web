import { NextPage } from 'next'
import { ButtonContact } from '@components/button-contact'
import { Container, PageSEO } from '@components/common'
import { CarouselSlider, CustomerReview, Introduction, SerivceHighlight } from '@containers/homepage'
import { SocialContact } from '@components/containers'

const Home: NextPage = () => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy`} description='Nexx Phamacy' />

      {/* Floating Button */}
      <ButtonContact />

      <CarouselSlider />
      {/* Highligt */}
      <SerivceHighlight />

      {/* Review */}
      <CustomerReview />

      {/* Introduction */}
      <Introduction />

      {/* Social Contact */}
      <SocialContact />
    </Container>
  )
}

export default Home
