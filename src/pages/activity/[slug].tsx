import React from 'react'
import classNames from 'classnames'
import * as _ from 'lodash'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone' // dependent on utc plugin
import { FacebookShareButton, LineShareButton } from 'react-share'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb, ImageLoader, PageSEO, BlogSEO } from '@components/common'
import { ButtonContact, ButtonTag } from '@components/index'
import { ArticleRelativeContainer } from '@containers/article/content'
import { IActivities } from 'pages/aboutus'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Bangkok')

const component = {
  p: (props: any) => <p {...props} />,
  h3: (props: any) => <h3 className='text-xl font-medium' {...props} />
}

interface Props {
  blogs: IActivities
}

const Article: NextPage<Props> = (props: any) => {
  const router = useRouter()
  if (!router.isFallback && !props.mdxSource) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <BlogSEO
        title={`Nexx Phamacy - ${props?.frontMatter?.title}`}
        description={props?.frontMatter?.description}
        authorDetails={['บูติกเด้อ โปรโมท']}
        summary={props?.frontMatter?.description}
        date={props?.frontMatter?.createdAt}
        lastmod={props?.frontMatter?.updatedAt}
        url={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`}
        images={[props?.frontMatter?.imgSrc]}
      />
      {/* Floating Button */}
      <ButtonContact />

      <BreadCrumb outerClassName='container mx-auto my-10' />
      <section>
        <div className='container mx-auto'>
          {/* Header */}
          <div className='mb-16'>
            <div className='mb-5 text-center'>
              <p className='font-poppins font-medium h2'>{props?.frontMatter?.title}</p>
              <p className='font-prompts font-medium h2'>{props?.frontMatter?.subTitle}</p>
            </div>
            <div className='mb-5'>
              <p className='font-prompts font-normal text-center'>
                โพสต์เมื่อ <span>{dayjs(props?.frontMatter.published_at).format('DD MMM YYYY')}</span> โดย{' '}
                <span>{props?.frontMatter?.user?.firstname}</span>
              </p>
            </div>
            <div className='flex justify-center space-x-5'>
              {_.map(props?.frontMatter.categories, (val, key) => (
                <ButtonTag key={key} name={val.title} />
              ))}
            </div>
          </div>
          {/* Image */}
          <div className='grid place-items-center'>
            <ImageLoader
              className='rounded-[50px]'
              src={props?.frontMatter?.imgSrc || '/images/aboutus/card-review-large.png'}
              width={1070}
              height={640}
            />
          </div>
          {/* Content */}
          <div className='flex flex-col p-5 md:flex-row md:py-24 md:px-10 2xl:px-32'>
            <div className='mb-5'>
              <ul className='flex flex-row justify-end space-x-3 md:flex-col md:justify-start md:items-start md:space-y-3 md:space-x-0'>
                <li>
                  <FacebookShareButton url={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`}>
                    <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                      <ImageLoader src='/images/icons/icon-fb.png' width={13} height={26} />
                    </button>
                  </FacebookShareButton>
                </li>
                <li>
                  <LineShareButton
                    url={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`}
                    title={props?.frontMatter?.title}
                  >
                    <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                      <ImageLoader src='/images/icons/icon-line.png' width={26} height={26} />
                    </button>
                  </LineShareButton>
                </li>
                <li>
                  <CopyToClipboard text={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`}>
                    <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                      <ImageLoader src='/images/icons/icon-link.png' width={23} height={23} />
                    </button>
                  </CopyToClipboard>
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                'overflow-hidden font-sarabun font-light text-xl md:px-14',
                'prose prose-p:text-base prose-p:text-[#000] max-w-none'
              )}
            >
              <MDXRemote {...props.mdxSource} components={component} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const slug = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/activities?${new URLSearchParams({
      range: JSON.stringify([]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({})
    })}`
  )
  const slugJson = await slug.json()
  const paths = slugJson.map((val: any) => ({ params: { slug: val.slug } }))

  return { paths: paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  const { slug } = context.params
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/activities?${new URLSearchParams({
      range: JSON.stringify([0, 1]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: slug })
    })}`
  )

  const postJson = await posts.json()

  if (!postJson.length) {
    return { notFound: true }
  }

  const mdxSource = await serialize(postJson[0].content)

  return {
    props: {
      frontMatter: postJson[0],
      mdxSource: mdxSource,
      slug: postJson[0].slug,
    },
    revalidate: 10
  }
}

export default Article
