import { NextPage } from 'next'
import { ArticleContainer } from '@components/containers'
import { HeaderSearchContainer, ArticlesContainer } from '@containers/article'
import { Container, BreadCrumb } from '@components/common'

const Articles: NextPage = () => {
  return (
    <Container>
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <HeaderSearchContainer />
      <ArticleContainer />
      <ArticlesContainer />
    </Container>
  )
}

export default Articles
