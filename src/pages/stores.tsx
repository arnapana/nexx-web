import { NextPage } from 'next'
import { Container, HeroBanner, BreadCrumb } from '@components/common'

const Stores: NextPage = () => {
  return (
    <Container>
      <HeroBanner src='/images/hero-banner/stores.png' />
      <BreadCrumb />
    </Container>
  )
}

export default Stores
