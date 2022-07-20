import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { serialize } from 'next-mdx-remote/serialize'

import { Container, HeroBanner, BreadCrumb, ImageLoader, PageSEO } from '@components/common'
import { ButtonContact, CardOurService } from '@components/index'
import { SocialContact } from '@components/containers'
import { OurServiceContainer } from '@containers/ourservice'
import { ICarousel } from './aboutus'

interface Props {
  posts: any
  carousel: ICarousel
}

const OurService: NextPage<Props> = (props) => {
  const router = useRouter()
  if (!router.isFallback && !props.posts) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <PageSEO
        title={`NEXX Pharma - OurService`}
        description='NEXX Pharma - OurService'
        imageUrl={props.carousel?.imgSrc}
      />

      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner src={props.carousel?.imgSrc} srcMobile={props.carousel?.imgSrcMobile} containerClassName='top-[26%]'>
        <div className='flex relative mb-10'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem]',
              '3xl:text-[80px] 3xl:leading-[90px]'
            )}
          >
            {props.carousel?.title}
          </p>
          <div
            className={classNames(
              'absolute top-[10%] -right-[15%] items-center w-[55px] h-[35px]',
              'md:top-0 md:w-[84px] md:h-[52px]',
              '3xl:top-[30%] 3xl:w-[84] 3xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[250px] md:w-[450px] 3xl:w-[600px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '3xl:text-[2.5rem] 3xl:leading-[55px]'
            )}
          >
            {props.carousel?.description}
          </p>
        </div>
      </HeroBanner>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <OurServiceContainer />

      {/* Card OurService */}
      <section className='container mx-auto'>
        {props.posts.map((val: any, idx: number) => (
          <CardOurService key={idx} mdxSource={val.mdxSource} frontMatter={val.frontMatter} />
        ))}
      </section>

      <SocialContact />
    </Container>
  )
}

export default OurService

export const getServerSideProps: GetServerSideProps = async () => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'ourservice' })
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
  const carouselJson = await carousel.json()

  const ourservices = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/ourservices?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const ourservicesJson = await ourservices.json()
  let posts = []

  for (const post of ourservicesJson) {
    const mdxSource = await serialize(post.content)
    posts.push({ mdxSource: mdxSource, frontMatter: post, slug: post.slug })
  }

  return {
    props: {
      posts,
      carousel: carouselJson?.length && carouselJson[0]
    }
  }
}
