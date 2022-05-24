import { GetServerSideProps, NextPage } from 'next'
import { ButtonContact } from '@components/button-contact'
import { Container, PageSEO } from '@components/common'
import { CarouselSlider, CustomerReview, Introduction, SerivceHighlight } from '@containers/homepage'
import { SocialContact } from '@components/containers'

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
}

const Home: NextPage<Props> = ({ hightlights, reviews }) => {
  console.log(hightlights, reviews)
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy`} description='Nexx Phamacy' />

      {/* Floating Button */}
      <ButtonContact />

      <CarouselSlider />
      {/* Highligt */}
      <SerivceHighlight />

      {/* Review */}
      <CustomerReview />

      {/* Introduction */}
      <Introduction />

      {/* Social Contact */}
      <SocialContact />
    </Container>
  )
}

export const getServerSideProps = async (context: GetServerSideProps) => {
  const hightlights = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/hightlights?/${new URLSearchParams({
      range: JSON.stringify([0, 6]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const reviews = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/reviews?/${new URLSearchParams({
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['id', 'DESC']),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const hightlightsJson = await hightlights.json()
  const reviewsJson = await reviews.json()

  console.log(reviewsJson)

  return {
    props: {
      hightlights: hightlightsJson,
      reviews: reviewsJson
    }
  }
}

export default Home
