import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb } from '@components/common'
import { ButtonContact } from '@components/index'
import { ArticleContentContainer, ArticleRelativeContainer } from '@containers/article/content'

import articlesConstant from '@constants/mock/articles.json'

const Article: NextPage = (props: any) => {
  const router = useRouter()
  if (!router.isFallback && !props.article) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      {/* Floating Button */}
      <ButtonContact />

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <ArticleContentContainer />
      <ArticleRelativeContainer />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const paths = articlesConstant.map((val) => {
    return { params: { slug: val.slug } }
  })

  return { paths: paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  const { slug } = context.params

  const article = articlesConstant.find((val) => val.slug === slug)

  if (!article) {
    throw new Error(`Failed to fetch posts, received status`)
  }

  return { props: { article: article }, revalidate: 60 }
}

export default Article
