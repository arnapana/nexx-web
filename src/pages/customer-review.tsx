import { useState, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import classNames from 'classnames'
import { Container, BreadCrumb, HeroBanner, ImageLoader, PageSEO } from '@components/common'
import { CustomerReviewContainer } from '@containers/customer-review'
import { ButtonContact } from '@components/index'
import { IReview } from 'pages'

interface Props {
  reviews: IReview[]
}

const CustomerReviews: NextPage<Props> = ({ reviews }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - Review`} description='Nexx Phamacy - Review' />
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner
        src='/images/hero-banner/customer-review.png'
        sectionClassName='bg-cover bg-[center_left_-350px] md:bg-center'
        containerClassName='top-[25%] 2xl:top-[27%]'
      >
        <div className='flex relative mb-10 w-[250px] md:w-[380px] 2xl:w-[520px]'>
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
              '2xl:top-[15%] 2xl:right-0 2xl:w-[84] 2xl:h-[52px]'
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
      <CustomerReviewContainer reviews={reviews}/>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/reviews?${new URLSearchParams({
      range: JSON.stringify([0, 8]),
      sort: JSON.stringify(['id', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const reviewsJson = await reviews.json()
  console.log(reviewsJson.length)

  return {
    props: {
      reviews: reviewsJson
    }
  }
}

export default CustomerReviews
