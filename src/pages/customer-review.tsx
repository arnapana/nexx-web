import { useState, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import classNames from 'classnames'
import { Container, BreadCrumb, HeroBanner, ImageLoader, PageSEO } from '@components/common'
import { CustomerReviewContainer } from '@containers/customer-review'
import { ButtonContact } from '@components/index'
import { IReview } from 'pages'
import { ICarousel } from './aboutus'

interface Props {
  reviews: IReview[]
  carousel: ICarousel
}

const CustomerReviews: NextPage<Props> = ({ reviews, carousel }) => {
  return (
    <Container>
      <PageSEO title={`NEXX Pharma - Review`} description='NEXX Pharma - Review' imageUrl={carousel?.imgSrc} />
      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner
        url={carousel.url}
        src={carousel?.imgSrc ? carousel?.imgSrc : '/images/hero-banner/customer-review.png'}
        srcMobile={carousel?.imgSrcMobile}
        sectionClassName='bg-cover bg-[center_left_-350px] md:bg-center'
        containerClassName='top-[25%] 2xl:top-[27%]'
      >
        <div className='flex relative mb-10 w-[250px] md:w-[380px] 3xl:w-[520px]'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem] md:leading-[65px]',
              '3xl:text-[80px] 3xl:leading-[90px]'
            )}
          >
            {carousel?.title}
          </p>
          <div
            className={classNames(
              'absolute top-[10%] right-[5%] items-center w-[55px] h-[35px]',
              'md:top-[10%] md:w-[84px] md:h-[52px]',
              '3xl:top-[15%] 3xl:right-0 3xl:w-[84] 3xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[300px] md:w-[764px] 3xl:w-[1024px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium pr-[20%] text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '3xl:text-[2.5rem] 3xl:leading-[55px]'
            )}
          >
            {carousel?.description}
          </p>
        </div>
      </HeroBanner>

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <CustomerReviewContainer reviews={reviews} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'review' })
    })}`
  )
  const carouselTypeJson = await carouselType.json()
  const carousel = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carousels?${new URLSearchParams({
      range: JSON.stringify([0, 0]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ carouselTypeId: carouselTypeJson[0].id, status: true })
    })}`
  )
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/reviews?${new URLSearchParams({
      range: JSON.stringify([0, 8]),
      sort: JSON.stringify(['id', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const carouselJson = await carousel.json()
  const reviewsJson = await reviews.json()

  return {
    props: {
      reviews: reviewsJson,
      carousel: carouselJson?.length && carouselJson[0]
    }
  }
}

export default CustomerReviews
