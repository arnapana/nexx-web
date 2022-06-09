import { GetServerSideProps, NextPage } from 'next'
import classNames from 'classnames'
import { Container, BreadCrumb, HeroBanner, ColorLine, ImageLoader, PageSEO } from '@components/common'
import { ArticleContainer } from '@components/containers'
import { ButtonContact } from '@components/index'
import { AboutusContainer, VisionContainer } from '@containers/aboutus'

import aboutusConstant from '@constants/mock/aboutus.json'
import { serialize } from 'next-mdx-remote/serialize'
import { IBlog } from './article/[slug]'

export type IActivities = {
  order: number
  status: boolean
  blog: IBlog
}

export type ICarousel = {
  carouselType: { id: number; name: string; slug: string }
  carouselTypeId: number
  description: string
  id: number
  imgSrc: string
  imgSrcMobile: string
  urlYoutube: string
  order: number
  slug: string
  status: boolean
  subTitle: string
  title: string
}

export type IVision = {
  content: string
  description: string
  id: number
  imgSrc: string
  width: string
  height: string
  order: number
  slug: string
  status: true
  subTitle: string
  title: string
}

export type IAboutus = {
  content: any
  description: string
  id: number
  imgSrc: string
  order: number
  slug: string
  status: true
  subTitle: string
  title: string
}
interface Props {
  visions: IVision[]
  aboutus: IAboutus[]
  activities: IActivities[]
  carousel: ICarousel
}

const Aboutus: NextPage<Props> = ({ visions, aboutus, activities, carousel }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - About Nexx Phamacy`} description='เกี่ยวกับเรา NEXX Pharma' />
      {/* Floating Button */}
      <ButtonContact />

      <HeroBanner
        src={carousel?.imgSrc ? carousel?.imgSrc : '/images/hero-banner/aboutus.png'}
        srcMobile={carousel?.imgSrcMobile}
      >
        <div className='flex relative flex-col mb-5 md:mb-8'>
          <div className='mb-3'>
            <p
              className={classNames(
                'text-[2.5rem] font-poppins font-semibold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
                'md:text-[5rem]',
                '2xl:text-8xl 2xl:leading-[90px]'
              )}
            >
              {carousel?.title}
            </p>
          </div>
          <div className=''>
            <p
              className={classNames(
                'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
                'md:text-[3rem]',
                '2xl:text-6xl 2xl:leading-[90px]'
              )}
            >
              {carousel?.subTitle}
            </p>
          </div>
          <div
            className={classNames(
              'absolute top-[15%] right-[20%] items-center w-[55px] h-[35px]',
              'md:right-0 md:w-[110px] md:h-[65px]',
              '2xl:right-[30%] 2xl:top-[5%] 2xl:w-[137px] 2xl:h-[85px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[300px] md:w-[400px] 2xl:w-[700px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]',
              'md:text-[1.5rem] md:leading-8',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
            {carousel?.description}
          </p>
        </div>
      </HeroBanner>

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <AboutusContainer aboutPost={aboutus} />
      <VisionContainer visionPost={visions} />
      <div>
        {/* Header */}
        <div className='mb-16'>
          <div className=''>
            <p className='font-kanits font-medium leading-10 text-center h2'>{aboutusConstant.activity.nameEn}</p>
          </div>
          <div className=''>
            <p className='font-kanits font-medium leading-relaxed text-center h2'>{aboutusConstant.activity.nameTh}</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 mb-7 mt-4' />
        </div>
        <ArticleContainer activityPost={activities} />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'aboutus' })
    })}`
  )
  const carouselTypeJson = await carouselType.json()
  const banner = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carousels?${new URLSearchParams({
      range: JSON.stringify([0, 0]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ carouselTypeId: carouselTypeJson[0].id, status: true })
    })}`
  )
  const vision = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/visions?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const aboutus = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/aboutus?${new URLSearchParams({
      range: JSON.stringify([0, 1]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const activities = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/activities?${new URLSearchParams({
      range: JSON.stringify([0, 2]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const visionJson = await vision.json()
  const aboutusArray = []
  const activitiesJson = await activities.json()
  const carouselJson = await banner.json()

  for await (const post of await aboutus.json()) {
    const mdxSource = await serialize(post.content)
    aboutusArray.push({ ...post, content: mdxSource })
  }

  return {
    props: {
      visions: visionJson,
      aboutus: aboutusArray,
      activities: activitiesJson,
      carousel: carouselJson?.length && carouselJson[0]
    } // will be passed to the page component as props
  }
}

export default Aboutus
