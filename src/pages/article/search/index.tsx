import React from 'react'
import { GetStaticProps } from 'next'
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

export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  return { props: {}, revalidate: 60 }
}

export default Search
