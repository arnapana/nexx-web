import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Container, BreadCrumb } from '@components/common'
import { SearchContentContainer, SearchHeaderContainer } from '@containers/article/search'

const Search = () => {
  return (
    <Container>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <SearchHeaderContainer />
      <SearchContentContainer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search } = context.query
  const telephamacies = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?/${new URLSearchParams({
      range: JSON.stringify([0, 6]),
      sort: JSON.stringify(['order', 'ASC']),
      filter: JSON.stringify({ status: true })
    })}`
  )

  const telephamaciesJson = await telephamacies.json()

  return {
    props: {
      telephamacies: telephamaciesJson
    }
  }
}

export default Search
