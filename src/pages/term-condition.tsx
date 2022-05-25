import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Container, BreadCrumb, PageSEO } from '@components/common'
import { ButtonContact } from '@components/index'
import { getPostBySlug } from '@utils/file-system'

const component = { p: (props: any) => <div {...props} /> }

const TermCondition: NextPage = (props: any) => {
  const router = useRouter()
  if (!router.isFallback && !props.mdxSource) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <PageSEO title={`Nexx Phamacy - ${props.frontMatter.title}`} description={props.frontMatter.description} />

      {/* Floating Button */}
      <ButtonContact />
      <BreadCrumb outerClassName='container mx-auto my-10' />
      <div className='container mx-auto'>
        <div className='mb-10'>
          <p className='font-prompts text-xl font-medium text-center 2xl:text-5xl 2xl:leading-[55px]'>
             {props.frontMatter.title}
          </p>
        </div>
        <div>
          {/* Header */}
          <div className='grid items-center px-8 h-[65px] text-white bg-primary rounded-2xl'>
            <p className={classNames('font-prompts font-medium 2xl:text-2xl telephamacy-title')}>
            {props.frontMatter.subTitle}
            </p>
          </div>
          {/* Content */}
          <div
            className={classNames(
              'mb-10 2xl:mb-32 font-sarabun text-base md:text-xl font-light p-5 md:p-10',
              'prose prose-p:text-[#696969] max-w-none'
            )}
          >
            <MDXRemote {...props.mdxSource} components={component} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .telephamacy-title {
            position: relative;
          }
          .telephamacy-title::before {
            content: '';
            width: 11px;
            height: 11px;
            border-radius: 50%;
            margin-right: 10px;
            display: inline-block;
            background-color: #fff;
            vertical-align: middle;
          }
        `}
      </style>
    </Container>
  )
}

export default TermCondition

export const getStaticProps: GetStaticProps = async () => {
    const post = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API as string}/policies?/${new URLSearchParams({
        range: JSON.stringify([0,1]),
        sort: JSON.stringify([]),
        filter: JSON.stringify({ slug: 'term-condition', status: true })
      })}`
    )
    const postJson = await post.json()
  
    const mdxSource = await serialize(postJson[0].content)
    return {
      props: {
        frontMatter: postJson[0],
        mdxSource: mdxSource,
        slug: postJson[0].slug
      }
    }
  }
  