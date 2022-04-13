import React from 'react'
import { ImageLoader } from '@components/common'
import aboutConstant from '@constants/mock/aboutus.json'

export const AboutusContainer = () => {
  return (
    <section className='mb-10 md:mb-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1'>
          {/* Content 1 */}
          <div className='grid grid-cols-1 gap-5 mb-10 md:mb-24 md:grid-cols-2'>
            <div className='md:pr-20'>
              <div className='mb-5'>
                <p className='text-primary h2'>{aboutConstant.content1.title}</p>
              </div>
              <div className='mb-6'>
                <p className='font-sarabun font-light md:text-lg 2xl:text-xl'>{aboutConstant.content1.paragraph1}</p>
              </div>
              <div>
                <p className='font-sarabun font-light md:text-lg 2xl:text-xl'>{aboutConstant.content1.paragraph1}</p>
              </div>
            </div>
            <div className=''>
              <ImageLoader
                className='overflow-hidden rounded-tr-[40px] rounded-bl-[40px]'
                width={555}
                height={600}
                src={aboutConstant.content1.image}
              />
            </div>
          </div>
          {/* Content 2 */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <div className='order-2 md:order-1'>
              <ImageLoader
                className='overflow-hidden rounded-tr-[40px] rounded-bl-[40px]'
                width={555}
                height={500}
                src={aboutConstant.content2.image}
              />
            </div>
            <div className='order-1 md:order-2 md:px-8'>
              <div className='mb-5'>
                <p className='font-sarabun font-light md:text-lg 2xl:text-xl'>{aboutConstant.content2.paragraph1}</p>
              </div>
              <div className='mb-5'>
                <p className='font-sarabun font-light md:text-lg 2xl:text-xl'>{aboutConstant.content2.paragraph2}</p>
              </div>
              <div>
                <p className='font-sarabun font-light md:text-lg 2xl:text-xl'>{aboutConstant.content2.paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
