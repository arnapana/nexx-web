import { NextPage } from 'next'
import classNames from 'classnames'
import { Container, BreadCrumb, HeroBanner, ImageLoader } from '@components/common'
import { CustomerReviewContainer } from '@containers/customer-review'
import { ButtonContact } from '@components/index'

const CustomerReviews: NextPage = () => {
  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src='/images/hero-banner/customer-review.png' sectionClassName='bg-cover bg-[center_left_-350px] md:bg-center' containerClassName='top-[25%]'>
        <div className='flex relative mb-10 w-[250px] md:w-[380px] 2xl:w-[500px]'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem] md:leading-[65px]',
              '2xl:text-[80px] 2xl:leading-[90px]'
            )}
          >
            Customer Review
          </p>
          <div
            className={classNames(
              'absolute top-[10%] right-[5%] items-center w-[55px] h-[35px]',
              'md:top-[10%] md:w-[84px] md:h-[52px]',
              '2xl:top-[15%] 2xl:w-[84] 2xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className=''>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
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
