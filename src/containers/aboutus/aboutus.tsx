import React from 'react'
import { ImageLoader } from '@components/common'
import aboutConstant from '@constants/mock/aboutus.json'

export const AboutusContainer = () => {
  return (
    <section className='md:mb-32'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1'>
          {/* Content 1 */}
          <div className='grid grid-cols-1 mb-24 md:grid-cols-2'>
            <div className='pr-20'>
              <div className='mb-5'>
                <p className='text-primary h2'>{aboutConstant.content1.title}</p>
              </div>
              <div className='mb-6'>
                <p className='font-sarabun text-xl font-light'>{aboutConstant.content1.paragraph1}</p>
              </div>
              <div>
                <p className='font-sarabun text-xl font-light'>{aboutConstant.content1.paragraph1}</p>
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
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
              <ImageLoader
                className='overflow-hidden rounded-tr-[40px] rounded-bl-[40px]'
                width={555}
                height={500}
                src={aboutConstant.content2.image}
              />
            </div>
            <div className='px-8'>
              <div className='mb-5'>
                <p className='font-sarabun text-xl font-light'>{aboutConstant.content2.paragraph1}</p>
              </div>
              <div className='mb-5'>
                <p className='font-sarabun text-xl font-light'>{aboutConstant.content2.paragraph2}</p>
              </div>
              <div>
                <p className='font-sarabun text-xl font-light'>{aboutConstant.content2.paragraph3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
