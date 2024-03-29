import React, { useEffect, useState } from 'react'
import Link from 'next/link'
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
import remarkBreak from 'remark-breaks'
import remarkParser from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify'

import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Container, BreadCrumb, ImageLoader, PageSEO, BlogSEO } from '@components/common'
import { ButtonContact, ButtonTag } from '@components/index'
import { ArticleRelativeContainer } from '@containers/article/content'
import { CheckIcon } from '@components/icons'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Bangkok')

const component = {
  p: (props: any) => <p {...props} />,
  h3: (props: any) => <h3 className='text-xl font-medium' {...props} />
}

export type IBlog = {
  id: number
  order: number
  title: string
  slug: string
  author: string
  subTitle: string
  description: string
  content: string
  imgSrc: string
  imgSrcMobile: string
  status: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
  categories: {
    id: number
    title: string
    slug: string
  }[]
  user: {
    firstname: string
    lastname: string
    author: string
  }
}
interface Props {
  blogs: IBlog
  relativePostJson: IBlog[]
}

const Article: NextPage<Props> = (props: any) => {
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setIsCopy(false)
  }, [router.asPath])


  if (!router.isFallback && !props.mdxSource) {
    return <p>Error</p>
  }
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <PageSEO title={`NEXX Pharma - ${props?.frontMatter?.title}`} description={props?.frontMatter?.description} imageUrl={props?.frontMatter?.imgSrc} />
      {/* Floating Button */}
      <ButtonContact />

      <BreadCrumb outerClassName='container mx-auto my-10' lastTitle={props?.frontMatter?.title} />
      <section>
        <div className='container mx-auto'>
          {/* Header */}
          <div className='mb-16'>
            <div className='mb-5 text-center md:px-[10%]'>
              <h2 className='mb-5 font-prompts font-medium h2'>{props?.frontMatter?.title}</h2>
              <h3 className='font-prompts font-medium h3'>{props?.frontMatter?.subTitle}</h3>
            </div>
            <div className='mb-5'>
              <p className='font-prompts font-normal text-center'>
                โพสต์เมื่อ <span>{dayjs(props?.frontMatter.published_at).format('DD MMM YYYY')}</span>{' '}
                {props?.frontMatter?.author && (
                  <span>
                    โดย <span className='font-medium'>{props?.frontMatter?.author?.replace('_', ' ')}</span>
                  </span>
                )}
              </p>
            </div>
            <div className='flex flex-wrap justify-center space-x-5'>
              {_.map(props?.frontMatter.categories, (val, key) => (
                <Link key={key} href={{ pathname: `/article`, query: { category: val.id } }} passHref scroll={false}>
                  <ButtonTag name={val.title} outerClassName="mb-3"/>
                </Link>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className='grid place-items-center'>
            <ImageLoader
              className='rounded-[50px]'
              src={props?.frontMatter?.imgSrc || props?.frontMatter?.imgSrcMobile }
              width={924}
              height={600}
              objectFit='contain'
            />
          </div>
          {/* Content */}
          <div className='flex flex-col pt-5 md:flex-row md:py-24 md:px-10 2xl:px-32'>
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
                  <LineShareButton url={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`} title={props?.frontMatter?.title}>
                    <button className='grid place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                      <ImageLoader src='/images/icons/icon-line.png' width={26} height={26} />
                    </button>
                  </LineShareButton>
                </li>
                <li>
                  <CopyToClipboard text={`${process.env.NEXT_PUBLIC_HOSTNAME}/article/${props?.frontMatter?.slug}`} onCopy={() => setIsCopy(true)}>
                    <button className='grid relative place-items-center w-[47px] h-[47px] bg-[#E6EDFF] rounded-lg'>
                      {isCopy ? <CheckIcon className='w-6 h-6 text-secondary' /> : <ImageLoader src='/images/icons/icon-link.png' width={23} height={23} />}
                      {isCopy ? <span className='absolute -bottom-5 text-sm'>Copied</span> : null}
                    </button>
                  </CopyToClipboard>
                </li>
              </ul>
            </div>
            <div className={classNames('overflow-hidden font-kanits font-light text-xl md:px-14', 'prose text-base prose-p:text-[#000] max-w-none')}>
              <MDXRemote {...props.mdxSource} components={component} />
            </div>
          </div>
        </div>
      </section>
      <ArticleRelativeContainer relativePost={props.relativePostJson} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<any, any> = async (context) => {
  const { slug } = context.params
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 1]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ slug: slug, status: true })
    })}`
  )
  const postJson = await posts.json()


  const relativePost = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
      range: JSON.stringify([0, 2]),
      sort: JSON.stringify([]),
      filter: JSON.stringify({ categoryId: postJson[0]?.categories?.map((val: any) => val?.id), status: true })
    })}`
  )

  const relativePostJson = await relativePost.json()

  if (!postJson.length) {
    return { notFound: true }
  }

  const mdxSource = await serialize(postJson[0].content.replace(/<(br|hr|input|meta|img|link|param|area)>/g, '<$1 />'), {
    mdxOptions: {
      remarkPlugins: [
        remarkParser,
        remarkBreak,
        remarkGfm,
        //@ts-ignore
        [remarkRehype, { allowDangerousHtml: true }]
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] }],
        [rehypeStringify, { allowDangerousHtml: true }]
      ]
    }
  })

  return {
    props: {
      frontMatter: postJson[0],
      mdxSource: mdxSource,
      slug: postJson[0]?.slug,
      relativePostJson: relativePostJson
    }
  }
}

export default Article
