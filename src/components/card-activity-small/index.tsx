import React from 'react'
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
}

export const CardActivitySmall: NextPage<Props> = ({ post, type }) => {
  return (
    <div className='w-full h-full cursor-pointer'>
      <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
        <div className='flex flex-col w-full min-w-[18rem] h-full'>
          <div className='flex flex-col mb-4 lg:flex-row'>
            <div
              className={classNames(
                'relative w-full h-[205px] md:mr-3 my-2 rounded-lg overflow-hidden',
                'lg:w-[111px] lg:h-[111px] lg:rounded-full '
              )}
            >
              <ImageLoader
                layout='fill'
                objectFit='cover'
                quality={100}
                src={
                  post?.imgSrc ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=='
                }
              />
            </div>
            <div className='flex flex-col justify-between lg:w-2/3'>
              <div className='md:mb-3'>
                <p className={classNames('font-kanits font-medium text-left text-lg md:text-xl')}>{post?.title}</p>
              </div>
              {/* Tag for Desktop */}
              <div className='hidden space-x-5 md:flex'>
                {post?.categories.slice(0, 2)?.map((val, idx) => (
                  <ButtonTag key={idx} name={val.title} />
                ))}
              </div>
            </div>
          </div>
          {/* Tag for Mobile */}
          <div className='flex mb-3 space-x-5 md:hidden'>
            {post?.categories.slice(0, 2)?.map((val, idx) => (
              <ButtonTag key={idx} name={val.title} />
            ))}
          </div>

          {/* Desctription */}
          <div className='mb-2'>
            {post?.description ? (
              <p className='h-full font-sarabun text-sm text-left text-[#5D5D5D] 2xl:text-base'>
                {post?.description?.slice(0, 100)}...
              </p>
            ) : (
              <div className='bg-slate-400 animate-pulse' style={{ width: '100%', height: '100%' }} />
            )}
          </div>
          {/* More */}
          <div className='flex items-center mt-auto space-x-3'>
            <p className='text-sm font-medium text-primary md:text-base'>
              <a>อ่านเพิ่มเติม</a>
            </p>
            <div className='grid place-items-center'>
              <ImageLoader width={24} height={12} src='/images/icons/enter-blue-button.png' />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
