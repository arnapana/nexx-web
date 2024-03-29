import { useRef } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { ArticleContainer } from '@components/containers'
import { HeaderSearchContainer, ArticlesContainer } from '@containers/article'
import { Container, BreadCrumb, PageSEO } from '@components/common'
import { IBlog } from './[slug]'
import { IActivities } from 'pages/aboutus'
import { BlogHightlight } from '@components/containers/blog-hightlight'
import { ButtonContact } from '@components/button-contact'

export type ICategory = {
  id: number
  title: string
  slug: string
}
interface Props {
  blogHightlight: IBlog[]
  blogs: IBlog[]
  categories: ICategory[]
  headerPage: {
    title: string
    description: string
  }
}

const Articles: NextPage<Props> = ({ blogHightlight, blogs, categories, headerPage }) => {
  const refContainer = useRef<any>(null)

  return (
    <Container>
      <PageSEO title={`NEXX Pharma - NEXX Pharma Blog`} description='บทความจากมีสาระ NEXX Pharma' />
      {/* Floating Button */}
      <ButtonContact />

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderSearchContainer headerPage={headerPage}/>
      {blogHightlight && <BlogHightlight blog={blogHightlight} refContainer={refContainer} />}

      <div ref={refContainer}>
        <ArticlesContainer blogPost={blogs} categories={categories} refContainer={refContainer} />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/categories?${new URLSearchParams({
      range: JSON.stringify([0, 10]),
      sort: JSON.stringify(['created_at', 'ASC']),
      filter: JSON.stringify({})
    })}`
  )
  const blogHightlight = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 2]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true, hightlight: true })
    })}`
  )
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 8]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ status: true })
    })}`
  )
  const headerPage = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/headerPages?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: 'article' })
    })}`
  )

  const headerPageJson = await headerPage.json()
  const postJson = await post.json()
  const blogHightlightJson = await blogHightlight.json()
  const categoriesJson = await categories.json()

  return {
    props: {
      blogHightlight: blogHightlightJson,
      blogs: postJson,
      categories: categoriesJson,
      headerPage: headerPageJson?.length && headerPageJson[0]
    } // will be passed to the page component as props
  }
}

export default Articles
