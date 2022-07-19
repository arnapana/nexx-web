import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as _ from 'lodash'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import { IBlog } from 'pages/article/[slug]'

interface Props {
  val: IBlog
  containerClassName?: string
  innerClassName?: string
  refContainer?: any
}

export const CardArticle: React.FC<Props> = ({ val, containerClassName, innerClassName, refContainer }) => {
  const router = useRouter()
  const categoryId = router.query?.category as string

  return (
    <div className={classNames(containerClassName)}>
      <div className={classNames(innerClassName, 'flex flex-col md:flex-row')}>
        {/* Image */}
        <div className='md:mr-3'>
          <div className='relative mx-auto w-full h-[200px] md:w-[225px] md:h-[147px]'>
            {val?.imgSrc ? (
              <Link href={{ pathname: '/article/[slug]', query: { slug: val.slug } }}>
                <a>
                  <ImageLoader
                    className='rounded-xl'
                    layout='fill'
                    src={
                      val?.imgSrcMobile ||
                      val?.imgSrc ||
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=='
                    }
                    objectFit='cover'
                    quality={100}
                  />
                </a>
              </Link>
            ) : (
              <div className='absolute bg-slate-400 rounded-md animate-pulse' style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        </div>
        {/* Content */}
        <div className='flex flex-col justify-between w-full md:pl-1 xl:pb-0'>
          <div>
            <Link href={{ pathname: '/article/[slug]', query: { slug: val.slug } }}>
              <a>
                <div className='mt-2 mb-1 cursor-pointer md:mt-0'>
                  <p className='font-prompts font-medium line-clamp-2 md:text-base'>{val?.title}</p>
                </div>
              </a>
            </Link>
            <div className='mb-2'>
              <p className='font-sarabun text-sm font-normal text-[#5D5D5D] line-clamp-3 '>{val?.description}</p>
            </div>
          </div>

          <div className='flex space-x-5'>
            {_.map(val.categories.slice(0, 2), (v, idx) => (
              <Link key={idx} href={{ pathname: `/article`, query: { category: v.id } }} passHref scroll={false}>
                <ButtonTag
                  key={idx}
                  name={v.title}
                  onClick={() => {
                    if (Number(categoryId) === v?.id) {
                      refContainer.current?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
