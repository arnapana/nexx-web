import React from 'react'
import { useRouter } from 'next/router'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import Link from 'next/link'
import { NextPage } from 'next'
import { IActivities } from 'pages/aboutus'

interface Props {
  post: IActivities
  type: 'activity' | 'article'
  refContainer?: any
}

export const CardActivityLarge: NextPage<Props> = ({ post, type, refContainer }) => {
  const router = useRouter()
  const categoryId = router.query?.category as string

  return (
    <div className='w-full'>
      <div className='w-full cursor-pointer'>
        <div className='overflow-hidden relative max-w-[1024px] max-h-[568px] rounded-[30px]'>
          <div className='flex absolute top-[8%] left-[5%] z-10 space-x-5'>
            {post?.categories.slice(0, 3)?.map((val, idx) => (
              <>
                {type === 'article' ? (
                  <Link key={idx} href={{ pathname: `/article`, query: { category: val.id } }} passHref scroll={false}>
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

          {post?.imgSrc ? (
            <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
              <ImageLoader
                className='overflow-hidden rounded-[30px]'
                width={1024}
                height={688}
                src={
                  post?.imgSrcMobile ||
                  post?.imgSrc ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=='
                }
              />
            </Link>
          ) : (
            <div className='bg-slate-400 animate-pulse' style={{ width: '100%', height: '100%' }} />
          )}
          <Link href={{ pathname: `/${type}/[slug]`, query: { slug: post?.slug } }} passHref>
            <div className='flex absolute bottom-0 left-0 flex-col justify-between p-2 w-full  h-[84px] bg-primary cursor-pointer md:py-3 md:px-9 md:h-[160px]'>
              <div>
                <div className='md:mb-2'>
                  <p className='font-kanits font-medium text-white line-clamp-2 h3'>{post?.title}</p>
                </div>
                <div className='hidden mb-3 md:block'>
                  <p className='font-kanits text-sm font-normal leading-7 text-white line-clamp-2 2xl:text-base'>{post?.description}</p>
                </div>
              </div>

              <div className='flex justify-end items-center mr-2 space-x-3 md:mr-0'>
                <p className='font-kanits text-sm text-white underline md:text-base'>
                  <a>อ่านเพิ่มเติม</a>
                </p>
                <div>
                  <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
