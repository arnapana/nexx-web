import React from 'react'
import { Button } from '@components/common'
import { ImageLoader } from '@components/common'

import introductionConstant from '@constants/mock/intro.json'

export const Introduction = () => {
  return (
    <section className='pb-[5rem] 2xl:pb-[10rem]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10 lg:mb-28'>
          <h2 className='font-prompts text-3xl font-medium text-center text-black md:text-4xl 2xl:text-[2.5rem]'>
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
            <div className='px-3 mt-10 lg:px-10'>
              {/* QuoteMessage */}
              <div className='mb-7'>
                <div className='relative w-full max-w-[544px] h-[70px]'>
                  <ImageLoader src='/images/intro/quote.png' layout='fill' />
                  <div className='absolute top-3 left-6'>
                    <p className='font-prompts text-base font-medium text-white xl:text-xl 2xl:text-2xl'>
                      {introductionConstant.quote}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-5'>
                <p className='font-prompts md:text-xl 2xl:text-2xl'>
                  <span className='font-medium text-primary'>{introductionConstant.paragraph_1.title}</span>
                  <span className='ml-2'>{introductionConstant.paragraph_1['sub-title']}</span>
                </p>
              </div>
              <div className='intro-list'>
                <ul className='font-prompts md:text-xl 2xl:text-2xl'>
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
            <div className='px-5 lg:px-16'>
              <div className='mb-5'>
                <h2 className='font-prompts text-xl font-medium md:text-2xl 2xl:text-3xl'>
                  {introductionConstant.paragraph_2.title}
                </h2>
              </div>
              <div className='mb-6'>
                <p className='font-prompts md:text-xl 2xl:text-2xl'>{introductionConstant.paragraph_2.content}</p>
              </div>
              <div className='mb-10'>
                <p className='font-prompts md:text-xl 2xl:text-2xl'>
                  <span className='text-primary'>{introductionConstant.paragraph_2.focus.title}</span>
                  <span className='ml-2'>{introductionConstant.paragraph_2.focus.content}</span>
                </p>
              </div>
              <div>
                <Button name='เกี่ยวกับเรา' />
              </div>
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
          content: url('images/icons/enter-green-button.png');
        }
      `}</style>
    </section>
  )
}
