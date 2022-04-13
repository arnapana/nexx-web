import { NextPage } from 'next'
import { Container, BreadCrumb, HeroBanner, ImageLoader } from '@components/common'
import { CustomerReviewContainer } from '@containers/customer-review'
import { ButtonContact } from '@components/index'

const CustomerReviews: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/customer-review.png'>
        <div className='flex relative mb-10 w-1/2'>
          <p className='font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] 2xl:text-[80px] 2xl:leading-[90px]'>
            Customer Review
          </p>
          <div className='flex absolute top-[15%] -right-[50%] items-center'>
            <ImageLoader src='/images/carousel/left-arrow-green.png' width={84} height={52} />
          </div>
        </div>
        <div className=''>
          <p className='font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] md:text-3xl 2xl:text-[2.5rem] 2xl:leading-[55px]'>
            รีวิวจากลูกค้า
          </p>
        </div>
      </HeroBanner>

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <CustomerReviewContainer />
    </Container>
  )
}

export default CustomerReviews
