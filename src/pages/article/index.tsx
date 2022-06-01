import { GetServerSideProps, NextPage } from 'next'
import { ArticleContainer } from '@components/containers'
import { HeaderSearchContainer, ArticlesContainer } from '@containers/article'
import { Container, BreadCrumb, PageSEO } from '@components/common'
import { IBlog } from './[slug]'
import { IActivities } from 'pages/aboutus'

export type ICategory = {
  title: string
  slug: string
}
interface Props {
  activities: IActivities[]
  blogs: IBlog[]
  categories: ICategory[]
}

const Articles: NextPage<Props> = ({ activities, blogs }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - Nexx Pharma Blog`} description='บทความจากมีสาระ Nexx Pharma' />

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderSearchContainer />
      <ArticleContainer activityPost={activities} />
      <ArticlesContainer blogPost={blogs} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/categories?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({})
    })}`
  )
  const activities = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/activities?${new URLSearchParams({
      range: JSON.stringify([0, 3]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({})
    })}`
  )
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 8]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({})
    })}`
  )
  const postJson = await post.json()
  const activitiesJson = await activities.json()
  const categoriesJson = await categories.json()
  return {
    props: {
      activities: activitiesJson,
      blogs: postJson,
      categoies: categoriesJson
    } // will be passed to the page component as props
  }
}

export default Articles
