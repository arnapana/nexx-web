import React from 'react'
import Link from 'next/link'
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
          <div className={classNames(innerClassName, 'flex flex-col md:flex-row md:h-[185px]')}>
            {/* Image */}
            <div className='mb-3 md:mr-3'>
              <div className='relative mx-auto w-full h-[165px] md:w-[205px] 2xl:w-[255px] 2xl:h-[185px]'>
                <ImageLoader className='rounded-xl' layout='fill' src={val.imgSrc} />
              </div>
            </div>
            {/* Content */}
            <div className='flex flex-col justify-between w-full md:pl-1'>
              <div>
                <div className='mb-2'>
                  <p className='font-prompts font-medium line-clamp-2 md:text-base 2xl:text-xl'>{val.title}</p>
                </div>
                <div className='mb-4'>
                  <p className='font-sarabun text-sm font-normal text-[#5D5D5D] line-clamp-3 '>{val.description}</p>
                </div>
              </div>
              <div className='flex space-x-5'>
                <ButtonTag name='สุขภาพ' />
                <ButtonTag name='ความเครียด' />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
