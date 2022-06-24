import React from 'react'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import Link from 'next/link'
import { NextPage } from 'next'
import { IActivities } from 'pages/aboutus'

interface Props {
  post: IActivities
  type: 'activity' | 'article'
}

export const CardActivityLarge: NextPage<Props> = ({ post, type }) => {
  return (
    <div className='w-full'>
      <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
        <div className='w-full cursor-pointer'>
          <div className='overflow-hidden relative max-w-[1024px] max-h-[568px] rounded-[30px]'>
            <div className='flex absolute top-[8%] left-[5%] z-10 space-x-5'>
              {post?.categories.slice(0, 3)?.map((val, idx) => (
                <ButtonTag key={idx} name={val?.title} />
              ))}
            </div>

            {post?.imgSrc ? (
              <ImageLoader className='overflow-hidden rounded-[30px]' width={1024} height={688} src={post?.imgSrc} />
            ) : (
              <div className='bg-slate-400 animate-pulse' style={{ width: '100%', height: '100%' }} />
            )}

            <div className='flex absolute bottom-0 left-0 flex-col justify-between p-2 w-full  h-[84px] bg-primary md:py-5 md:px-9 md:h-[200px]'>
              <div>
                <div className='md:mb-2'>
                  <p className='font-kanits font-medium text-white line-clamp-2 h3'>{post?.title}</p>
                </div>
                <div className='hidden mb-3 md:block'>
                  <p className='font-sarabun text-sm font-normal leading-7 text-white line-clamp-2 2xl:text-base'>
                    {post?.description}
                  </p>
                </div>
              </div>
              <div className='flex justify-end items-center mr-2 space-x-3 md:mr-0'>
                <p className='font-prompts text-sm text-white underline md:text-base'>
                  <a>อ่านเพิ่มเติ่ม</a>
                </p>
                <div>
                  <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
