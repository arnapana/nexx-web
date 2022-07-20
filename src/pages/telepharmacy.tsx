import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import classNames from 'classnames'

import { Container, HeroBanner, BreadCrumb, ImageLoader, PageSEO } from '@components/common'
import { TelephamacyContainer, ContactTelephamacyContainer } from '@containers/telephamacy'
import { ButtonContact } from '@components/button-contact'
import { ICarousel } from './aboutus'

export interface ITelephamacy {
  id: number
  parentId: number
  order: number
  title: string
  metaTitle: string
  content: string
  imgSrc: string
  imgSlideSrc: string
  slug: string
  status: boolean
}

interface Props {
  telephamacies: ITelephamacy[]
  carousel: ICarousel
}

const Telephamacy: NextPage<Props> = ({ telephamacies, carousel }) => {
  return (
    <Container>
      <PageSEO
        title={`NEXX Pharma - Telepharmacy`}
        description='NEXX Pharma - Telepharmacy'
        imageUrl={carousel?.imgSrc}
      />

      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner
        src={carousel?.imgSrc ? carousel?.imgSrc : '/images/hero-banner/telepharmacy.png'}
        srcMobile={carousel?.imgSrcMobile}
        sectionClassName='bg-cover bg-[center_left_-330px] md:bg-center'
        containerClassName='top-[26%] left-[13%] md:left-[15%] 2xl:left-[13%]'
      >
        <div className='flex relative mb-10'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem]',
              '3xl:text-[80px] 3xl:leading-[90px]'
            )}
          >
            {carousel?.title}
          </p>
          <div
            className={classNames(
              'absolute top-[10%] -right-[20%] items-center w-[55px] h-[35px]',
              'md:top-0 md:w-[84px] md:h-[52px]',
              '3xl:top-[30%] 3xl:w-[84] 3xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[260px] md:w-[450px] 3xl:w-[600px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '3xl:text-[2.5rem] 3xl:leading-[55px]'
            )}
          >
            {carousel?.description}
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />

      <TelephamacyContainer telephamacies={telephamacies} />
      <ContactTelephamacyContainer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'telephamacy' })
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
  const telephamacies = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/telephamacies?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const telephamacyArray = []

  const carouselJson = await carousel.json()
  const telephamaciesJson = await telephamacies.json()

  for (const telephamacy of telephamaciesJson) {
    const mdxSource = await serialize(telephamacy.content)
    telephamacyArray.push({ ...telephamacy, content: mdxSource })
  }

  return {
    props: {
      telephamacies: telephamacyArray,
      carousel: carouselJson?.length && carouselJson[0]
    }
  }
}

export default Telephamacy
