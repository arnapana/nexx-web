import { GetServerSideProps, NextPage } from 'next'
import { ButtonContact } from '@components/button-contact'
import { Container, PageSEO } from '@components/common'
import { CarouselSlider, CustomerReview, Introduction, SerivceHighlight } from '@containers/homepage'
import { SocialContact } from '@components/containers'
import { ICarousel } from './aboutus'

export interface IHightlight {
  id: number
  order: number
  title: string
  subTitle: string
  description: string
  content: string
  status: boolean
}

export interface IReview {
  id: number
  order: number
  firstname: string
  lastname: string
  jobName: string
  content: string
  imgSrc: string
  status: true
}
interface Props {
  hightlights: IHightlight[]
  reviews: IReview[]
  carousel: ICarousel[]
}

const Home: NextPage<Props> = ({ hightlights, reviews, carousel }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy`} description='Nexx Phamacy' />

      {/* Floating Button */}
      <ButtonContact />

      <CarouselSlider carousels={carousel} />
      {/* Highligt */}
      {hightlights?.length && <SerivceHighlight hightlightPost={hightlights} />}

      {/* Review */}
      {reviews?.length && <CustomerReview reviewPost={reviews} />}

      {/* Introduction */}
      <Introduction />

      {/* Social Contact */}
      <SocialContact />
    </Container>
  )
}

export const getServerSideProps = async (context: GetServerSideProps) => {
  const carouselType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carouselTypes?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'homepage' })
    })}`
  )
  const carouselTypeJson = await carouselType.json()
  const carousel = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/carousels?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ carouselTypeId: carouselTypeJson[0].id, status: true })
    })}`
  )

  const hightlights = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/hightlights?${new URLSearchParams({
      range: JSON.stringify([0, 4]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/reviews?${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const hightlightsJson = await hightlights.json()
  const reviewsJson = await reviews.json()
  const carouselJson = await carousel.json()

  return {
    props: {
      hightlights: hightlightsJson,
      reviews: reviewsJson,
      carousel: carouselJson
    }
  }
}

export default Home
