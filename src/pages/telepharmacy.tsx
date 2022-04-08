import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb } from '@components/common'
import { TelephamacyContainer, ContactTelephamacyContainer } from '@containers/telephamacy'
import { ButtonContact } from '@components/button-contact'

const Telephamacy: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/telepharmacy.png' />
      <BreadCrumb outerClassName='container mx-auto my-10' />

      <TelephamacyContainer />
      <ContactTelephamacyContainer />
    </Container>
  )
}

export default Telephamacy
