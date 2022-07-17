import { GetServerSideProps, NextPage } from 'next'
import classNames from 'classnames'
import { ButtonContact } from '@components/index'
import { Container, HeroBanner, BreadCrumb, ImageLoader, PageSEO } from '@components/common'
import {
  HeaderContentContainer,
  ContactContainer,
  OurBranchContainer,
  RelativeBranchContainer
} from '@containers/ourstore'
import { ICarousel } from './aboutus'

export type IBranch = {
  address: string
  name: string
  district: string
  province: string
  id: number
  latitude: string
  longtitude: string
  order: number
  phone: string
  status: boolean
  timeOpen: string
  url: string
}

export type INetwork = {
  address: string
  name: string
  district: string
  province: string
  id: number
  latitude: string
  longtitude: string
  order: number
  phone: string
  status: boolean
  timeOpen: string
  url: string
}

interface Props {
  carousel: ICarousel
  branch: IBranch[]
  network: INetwork[]
}

const Stores: NextPage<Props> = ({ carousel, branch, network }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Pharma - Store`} description='Nexx Pharma - Store' imageUrl={carousel?.imgSrc} />

      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner
        src={carousel?.imgSrc ? carousel?.imgSrc : '/images/hero-banner/stores.png'}
        srcMobile={carousel?.imgSrcMobile}
        sectionClassName='bg-cover bg-[center_left_-350px] md:bg-center'
        containerClassName='top-[32%]'
      >
        <div className='flex relative mb-10'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem]',
              '2xl:text-[80px] 2xl:leading-[90px]'
            )}
          >
            {carousel.title}
          </p>
          <div
            className={classNames(
              'absolute top-[10%] -right-[5%] items-center w-[55px] h-[35px]',
              'md:top-0 md:w-[84px] md:h-[52px]',
              '2xl:top-[30%] 2xl:w-[84] 2xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[250px] md:w-[380px] 2xl:w-[500px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
            {carousel.description}
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderContentContainer />
      <OurBranchContainer branchs={branch} />
      <RelativeBranchContainer networks={network} />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'store' })
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

  const branch = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/branchs?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const network = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/networks?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const branchJson = await branch.json()
  const networkJson = await network.json()
  const carouselJson = await carousel.json()

  return {
    props: {
      carousel: carouselJson?.length && carouselJson[0],
      branch: branchJson,
      network: networkJson
    }
  }
}

export default Stores
