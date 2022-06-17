import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { ImageLoader } from '@components/common'
import aboutConstant from '@constants/mock/aboutus.json'
import { IAboutus } from 'pages/aboutus'
import { NextPage } from 'next'

interface Props {
  aboutPost: IAboutus[]
}

export const AboutusContainer: NextPage<Props> = ({ aboutPost }) => {
  return (
    <section className='mb-14 md:mb-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1'>
          {/* Content 1 */}
          <div className='grid grid-cols-1 gap-5 mb-10 md:mb-16 lg:grid-cols-2'>
            <div className='md:pr-8 2xl:pr-16'>
              <div className='mb-5'>
                <p className='text-primary h2'>{aboutPost[0]?.title}</p>
              </div>
              <div className='mb-6'>
                <p className='max-w-none font-sarabun prose-p:text-base prose-p:2xl:text-lg prose-p:text-[#000] prose'>
                  {aboutPost[0]?.content && <MDXRemote {...aboutPost[0]?.content} />}
                </p>
              </div>
            </div>
            <div className='grid place-content-start py-5'>
              <ImageLoader
                className='overflow-hidden rounded-tr-[40px] rounded-bl-[40px]'
                width={555}
                height={570}
                alt={aboutPost[0]?.title}
                src={aboutPost[0]?.imgSrc ? aboutPost[0]?.imgSrc : aboutConstant.content1.image}
              />
            </div>
          </div>
          {/* Content 2 */}
          <div className='grid grid-cols-1 gap-5 md:gap-8 lg:grid-cols-2'>
            <div className='grid order-2 place-content-start md:px-5 lg:order-1'>
              <ImageLoader
                className='overflow-hidden rounded-tr-[40px] rounded-bl-[40px]'
                width={555}
                height={460}
                alt={aboutPost[1]?.title}
                src={aboutPost[1]?.imgSrc ? aboutPost[1]?.imgSrc : aboutConstant.content2.image}
              />
            </div>
            <div className='order-1 md:px-2 lg:order-2 2xl:pr-20'>
              <p className='max-w-none font-sarabun prose-p:text-base prose-p:2xl:text-lg prose-p:text-[#000] prose'>
                {aboutPost[1]?.content && <MDXRemote {...aboutPost[1]?.content} />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
