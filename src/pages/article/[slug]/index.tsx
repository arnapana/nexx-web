import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb, ImageLoader } from '@components/common'
import { ButtonContact, ButtonTag } from '@components/index'
import { ArticleRelativeContainer } from '@containers/article/content'
import { getPostBySlug } from '@utils/file-system'

import articlesConstant from '@constants/mock/articles.json'

const component = {
  p: (props: any) => <div {...props} />,
  h3: (props: any) => <h3 className='text-xl font-medium' {...props} />
}

const Article: NextPage = (props: any) => {
  const router = useRouter()
  if (!router.isFallback && !props.mdxSource) {
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
      <section>
        <div className='container mx-auto'>
          {/* Header */}
          <div className='mb-16'>
            <div className='mb-5 text-center'>
              <p className='font-poppins font-medium h1'>Computer Vision Syndrome (CVS) :</p>
              <p className='font-prompts font-medium h1'>โรคใกล้ตัวของคนทำงานยุคใหม่เพราะจ้องหน้าจอมากเกินไป</p>
            </div>
            <div className='mb-5'>
              <p className='font-prompts font-normal text-center'>
                โพสต์เมื่อ <span>01 มกราคม 2564</span> โดย <span>บูติกเด้อ โปรโมท</span>
              </p>
            </div>
            <div className='flex justify-center space-x-5'>
              <ButtonTag name='สุขภาพ' />
              <ButtonTag name='ความเคลียด' />
            </div>
          </div>
          {/* Image */}
          <div className='grid place-items-center'>
            <ImageLoader
              className='rounded-[50px]'
              src='/images/aboutus/card-review-large.png'
              width={1070}
              height={640}
            />
          </div>
          {/* Content */}
          <div className='flex flex-col p-5 md:flex-row md:py-24 md:px-10 2xl:px-32'>
            <div className='mb-5'>
              <ul className='flex flex-row justify-end space-x-3 md:flex-col md:justify-start md:items-start md:space-y-3 md:space-x-0'>
                <li>
                  <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                    <ImageLoader src='/images/icons/icon-fb.png' width={13} height={26} />
                  </button>
                </li>
                <li>
                  <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                    <ImageLoader src='/images/icons/icon-line.png' width={26} height={26} />
                  </button>
                </li>
                <li>
                  <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                    <ImageLoader src='/images/icons/icon-link.png' width={23} height={23} />
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={classNames('overflow-hidden font-sarabun font-light text-xl md:px-14', 'prose prose-p:text-[#000] max-w-none')}
            >
              <MDXRemote {...props.mdxSource} components={component} />
            </div>
          </div>
        </div>
      </section>
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

export const getStaticProps: GetStaticProps<any, any> = async () => {
  const posts: any = await getPostBySlug('cvs')
  const mdxSource = await serialize(posts.content)
  return {
    props: {
      frontMatter: posts,
      mdxSource: mdxSource,
      slug: posts.slug
    }
  }
  // const { slug } = context.params

  // const article = articlesConstant.find((val) => val.slug === slug)

  // if (!article) {
  //   throw new Error(`Failed to fetch posts, received status`)
  // }

  // return { props: { article: article }, revalidate: 60 }
}

export default Article
