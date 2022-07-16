import React from 'react'
import classNames from 'classnames'
import { Button } from '@components/common'
import { ImageLoader } from '@components/common'

import introductionConstant from '@constants/mock/intro.json'
import Link from 'next/link'

export const Introduction = () => {
  return (
    <section className='pb-[5rem] 2xl:pb-[rem]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10 lg:mb-28'>
          <h2 className='font-prompts text-2xl font-medium text-center text-black md:text-4xl 2xl:text-[2.5rem]'>
            {introductionConstant.title} <span className='text-secondary'>{introductionConstant['sub-title']}</span>
          </h2>
        </div>
        {/* Intro 1 */}
        <div className='flex flex-col'>
          <div className='grid grid-cols-1 mb-10 md:grid-cols-2 md:mb-32'>
            {/* Image */}
            <div className='m-auto'>
              <ImageLoader src='/images/intro/intro1.png' width={555} height={320} />
            </div>
            {/* Content */}
            <div className='mt-10 lg:px-10'>
              {/* QuoteMessage */}
              <div className='mb-7'>
                <div className='relative w-full max-w-[544px] h-[70px]'>
                  <ImageLoader src='/images/intro/quote.png' layout='fill' />
                  <div className='absolute top-1/2 left-6 -translate-y-[70%] md:-translate-y-2/3'>
                    <p className='font-prompts text-base font-medium text-white md:text-lg 2xl:text-2xl'>{introductionConstant.quote}</p>
                  </div>
                </div>
              </div>
              <div className='mb-5'>
                <p className='font-prompts md:text-lg 2xl:text-xl'>
                  <span className='font-medium text-primary'>{introductionConstant.paragraph_1.title}</span>
                  <span className='ml-2'>{introductionConstant.paragraph_1['sub-title']}</span>
                </p>
              </div>
              <div className={classNames('intro-list')}>
                <ul className='font-prompts md:text-lg 2xl:text-xl'>
                  {introductionConstant.paragraph_1.list.map((val, idx) => (
                    <li key={idx}>{val.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Intro 2 */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            {/* Contents */}
            <div className='lg:px-16'>
              <div className='mb-5'>
                <h2 className='font-prompts text-xl font-medium md:text-2xl'>{introductionConstant.paragraph_2.title}</h2>
              </div>
              <div className='mb-6'>
                <p className='font-prompts md:text-lg 2xl:text-xl'>{introductionConstant.paragraph_2.content}</p>
              </div>
              <div className='mb-10'>
                <p className='font-prompts md:text-lg 2xl:text-xl'>
                  <span className='text-primary'>{introductionConstant.paragraph_2.focus.title}</span>
                  <span className='ml-2'>{introductionConstant.paragraph_2.focus.content}</span>
                </p>
              </div>
              <Link href="/aboutus">
                <a>
                  <Button name='เกี่ยวกับเรา' innerClassName='w-[155px] md:w-[180px] 2xl:w-[205px]' />
                </a>
              </Link>
            </div>
            {/* Images */}
            <div className='m-auto'>
              <ImageLoader src='/images/intro/intro2.png' width={254} height={533} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ul {
          position: relative;
          padding-left: 20px;
          list-style: none;
        }
        li {
          padding-left: 20px;
          margin-bottom: 5px;
        }
        .intro-list ul li:before {
          // list-style-image: url('images/icons/enter-green-button.png');
          position: absolute;
          left: 0px;
          content: '';
          background-image: url('images/icons/enter-green-button.png');
          background-size: 100% 100%;
          display: inline-block;

          width: 30px;
          height: 15px;

          margin-top: 6px;
        }
      `}</style>
    </section>
  )
}
