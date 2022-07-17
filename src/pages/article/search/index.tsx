import React from 'react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb, PageSEO } from '@components/common'
import { SearchContentContainer, SearchHeaderContainer } from '@containers/article/search'
import { IBlog } from '../[slug]'

interface Props {
  blogs: IBlog[]
}

const Search: NextPage<Props> = ({ blogs }) => {
  return (
    <Container>
      <PageSEO title={`Nexx Pharma - Nexx Pharma Blog`} description='บทความจากมีสาระ Nexx Pharma' />

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <SearchHeaderContainer />
      <SearchContentContainer postBlog={blogs} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyword } = context.query
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ content: keyword, status: true })
    })}`
  )

  const blogJson = await blog.json()

  return {
    props: {
      blogs: blogJson
    }
  }
}

export default Search
