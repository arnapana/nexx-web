import React from 'react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb } from '@components/common'
import { SearchContentContainer, SearchHeaderContainer } from '@containers/article/search'
import { IBlog } from '../[slug]'

interface Props {
  blogs: IBlog[]
}

const Search: NextPage<Props> = ({ blogs }) => {
  return (
    <Container>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <SearchHeaderContainer />
      <SearchContentContainer postBlog={blogs}/>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyword } = context.query
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 6]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ title: keyword })
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
