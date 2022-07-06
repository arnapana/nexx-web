import React from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import classNames from 'classnames'
import { ButtonTag } from '@components/index'
import { ImageLoader } from '@components/common'
import { IBlog } from 'pages/article/[slug]'

interface Props {
  val: IBlog
  containerClassName?: string
  innerClassName?: string
}

export const CardArticle: React.FC<Props> = ({ val, containerClassName, innerClassName }) => {
  return (
    <div className={classNames(containerClassName)}>
      <Link href={{ pathname: '/article/[slug]', query: { slug: val.slug } }}>
        <a title=''>
          <div className={classNames(innerClassName, 'flex flex-col md:flex-row')}>
            {/* Image */}
            <div className='md:mr-3'>
              <div className='relative mx-auto w-full h-[200px] md:w-[225px] md:h-[147px]'>
                {val?.imgSrc ? (
                  <ImageLoader className='rounded-xl' layout='fill' src={val?.imgSrc} objectFit='cover' quality={100}/>
                ) : (
                  <div className='absolute bg-slate-400 rounded-md animate-pulse' style={{ width: '100%', height: '100%' }} />
                )}
              </div>
            </div>
            {/* Content */}
            <div className='flex flex-col justify-between w-full md:pl-1 xl:pb-0'>
              <div>
                <div className='mt-2 mb-1 md:mt-0'>
                  <p className='font-prompts font-medium line-clamp-2 md:text-base 2xl:text-xl'>{val?.title}</p>
                </div>
                <div className='mb-2'>
                  <p className='font-sarabun text-sm font-normal text-[#5D5D5D] line-clamp-3 '>{val?.description}</p>
                </div>
              </div>
              <div className='flex space-x-5'>
                {_.map(val.categories.slice(0, 2), (v, idx) => (
                  <ButtonTag key={idx} name={v.title} />
                ))}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
