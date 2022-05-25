import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { serialize } from 'next-mdx-remote/serialize'

import { Container, HeroBanner, BreadCrumb, ImageLoader, PageSEO } from '@components/common'
import { ButtonContact, CardOurService } from '@components/index'
import { SocialContact } from '@components/containers'
import { OurServiceContainer } from '@containers/ourservice'

const OurService: NextPage = (props: any) => {
  const router = useRouter()
  if (!router.isFallback && !props.posts) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - OurService`} description='Nexx Phamacy - OurService' />

      {/* Floating Button */}
      <ButtonContact />
      <HeroBanner
        src='/images/hero-banner/our-service.png'
        srcMobile='/images/hero-banner/our-service-mobile.png'
        containerClassName='top-[26%]'
      >
        <div className='flex relative mb-10'>
          <p
            className={classNames(
              'text-[2rem] leading-10 font-poppins font-semibold text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-[3.5rem]',
              '2xl:text-[80px] 2xl:leading-[90px]'
            )}
          >
            Our Services
          </p>
          <div
            className={classNames(
              'absolute top-[10%] -right-[15%] items-center w-[55px] h-[35px]',
              'md:top-0 md:w-[84px] md:h-[52px]',
              '2xl:top-[30%] 2xl:w-[84] 2xl:h-[52px]'
            )}
          >
            <ImageLoader src='/images/carousel/left-arrow-green.png' layout='fill' />
          </div>
        </div>
        <div className='w-[250px] md:w-[450px] 2xl:w-[600px]'>
          <p
            className={classNames(
              'font-prompts text-2xl font-medium text-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]',
              'md:text-3xl',
              '2xl:text-[2.5rem] 2xl:leading-[55px]'
            )}
          >
            สุขภาพที่ดีที่ทุกคนเข้าถึงได้ ด้วยบริการจาก NEXX Pharma
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

export const getStaticProps: GetStaticProps = async () => {
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
      range: JSON.stringify([0, 1]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ carouselTypeId: carouselTypeJson[0].id })
    })}`
  )
  const carouselJson = await carousel.json()

  console.log(carouselJson)

  const ourservices = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/ourservices?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
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
      carousel: carouselJson
    }
  }
}
