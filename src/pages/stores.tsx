import { NextPage } from 'next'
import { ButtonContact } from '@components/index'
import { Container, HeroBanner, BreadCrumb } from '@components/common'
import {
  HeaderContentContainer,
  ContactContainer,
  OurBranchContainer,
  RelativeBranchContainer
} from '@containers/ourstore'

const Stores: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/stores.png' />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderContentContainer />
      <OurBranchContainer />
      <RelativeBranchContainer />

      <ContactContainer />
      <style jsx>{`
        th,
        td {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </Container>
  )
}

export default Stores
