import React from 'react'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import { NextPage } from 'next'
import { IActivities } from 'pages/aboutus'
import Link from 'next/link'
import { IBlog } from 'pages/article/[slug]'

interface Props {
  post: IBlog
}

export const CardActivitySmall: NextPage<Props> = ({ post }) => {
  return (
    <div className='mx-auto'>
      <div className='min-w-[21rem] max-w-[25rem] md:min-w-full'>
        <div className='flex flex-col mb-4 lg:flex-row'>
          <div
            className={classNames(
              'relative w-full h-[185px] md:mr-3 my-2 rounded-lg overflow-hidden',
              'md:w-[111px] md:h-[111px] md:rounded-full',
              ''
            )}
          >
            <ImageLoader layout='fill' src={post.imgSrc ? post.imgSrc : '/images/article/img1.png'} />
          </div>
          <div className='lg:w-2/3'>
            <div className='md:mb-3'>
              <p className={classNames('font-kanits font-medium text-left text-lg md:text-xl')}>
                {post.title}
              </p>
            </div>
            <div className='hidden space-x-5 md:flex'>
              <ButtonTag name='highligh' />
              <ButtonTag name='highligh' />
            </div>
          </div>
        </div>
        <div className='flex mb-3 space-x-5 md:hidden'>
          <ButtonTag name='highligh' />
          <ButtonTag name='highligh' />
        </div>
        <div className='mb-2'>
          <p className='font-sarabun text-sm text-left text-[#5D5D5D] 2xl:text-base'>{post.description}</p>
        </div>
        <div className='flex items-center space-x-3'>
          <p className='font-prompts text-sm font-medium text-primary md:text-base'>
            <Link href={{ pathname: '/article/[slug]', query: { slug: post.slug } }}>
              <a>อ่านเพิ่มเติ่ม</a>
            </Link>
          </p>
          <div className='grid place-items-center'>
            <ImageLoader width={24} height={12} src='/images/icons/enter-blue-button.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
