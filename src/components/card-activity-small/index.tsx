import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import { NextPage } from 'next'
import { IActivities } from 'pages/aboutus'
import Link from 'next/link'
import { IBlog } from 'pages/article/[slug]'

interface Props {
  post: IActivities
  type: 'activity' | 'article'
  refContainer?: any
}

export const CardActivitySmall: NextPage<Props> = ({ post, type, refContainer }) => {
  const router = useRouter()
  const categoryId = router.query?.category as string

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col w-full min-w-[18rem] h-full'>
        <div className='flex flex-col mb-4 lg:flex-row'>
          <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
            <div
              className={classNames(
                'cursor-pointer relative w-full h-[205px] md:mr-3 my-2 rounded-lg overflow-hidden',
                'lg:w-[111px] lg:h-[111px] lg:rounded-full '
              )}
            >
              <ImageLoader
                layout='fill'
                objectFit='cover'
                quality={100}
                src={
                  post?.imgSrcMobile ||
                  post?.imgSrc ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=='
                }
              />
            </div>
          </Link>

          <div className='flex flex-col justify-between lg:w-2/3'>
            <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
              <div className='md:mb-3'>
                <p className={classNames('font-kanits font-medium text-left text-lg md:text-xl')}>{post?.title}</p>
              </div>
            </Link>
            {/* Tag for Desktop */}
            <div className='hidden space-x-5 md:flex'>
              {post?.categories.slice(0, 2)?.map((val, idx) => (
                <>
                  {type === 'article' ? (
                    <Link key={idx} href={{ pathname: `/article`, query: { category: val?.id } }} scroll={false} passHref>
                      <ButtonTag
                        name={val.title}
                        onClick={() => {
                          if (Number(categoryId) === val?.id) {
                            refContainer.current?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      />
                    </Link>
                  ) : (
                    <ButtonTag name={val.title} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        {/* Tag for Mobile */}
        <div className='flex mb-3 space-x-5 md:hidden'>
          {post?.categories.slice(0, 2)?.map((val, idx) => (
            <>
              {type === 'article' ? (
                <Link key={idx} href={{ pathname: `/article`, query: { category: val?.id } }} passHref scroll={false}>
                  <ButtonTag
                    name={val.title}
                    onClick={() => {
                      if (Number(categoryId) === val?.id) {
                        refContainer.current?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  />
                </Link>
              ) : (
                <ButtonTag name={val.title} />
              )}
            </>
          ))}
        </div>

        {/* Desctription */}
        <div className='mb-2'>
          {post?.description ? (
            <p className='h-full font-sarabun text-sm text-left text-[#5D5D5D] line-clamp-2 2xl:text-base 2xl:line-clamp-4'>{post?.description}</p>
          ) : (
            <div className='bg-slate-400 animate-pulse' style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        {/* More */}
        <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
          <div className='flex items-center mt-auto space-x-3 cursor-pointer'>
            <p className='text-sm font-medium text-primary md:text-base'>
              <a>อ่านเพิ่มเติม</a>
            </p>
            <div className='grid place-items-center'>
              <ImageLoader width={24} height={12} src='/images/icons/enter-blue-button.png' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
