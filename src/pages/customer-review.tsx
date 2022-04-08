import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner } from '@components/common'
import { ButtonContact } from '@components/index'

const CustomerReviews: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/customer-review.png' />

      <BreadCrumb outerClassName='container mx-auto my-10' />
    </Container>
  )
}

export default CustomerReviews
