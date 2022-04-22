import React from 'react'
import { Button } from '@components/common'
import { ButtonTag, CardArticle } from '@components/index'

const tags = ['สุขภาพ', 'ความเครียด', 'covid19', 'Workfromhome', 'โควิด']

export const ArticlesContainer = () => {
  return (
    <section className='mb-24 bg-[#FCFCFC] py-10 md:py-20'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10 md:mb-16'>
          <div className='mb-5'>
            <p className='font-prompts font-medium text-center h2'>บทความทั้งหมด</p>
          </div>
          <div className='flex flex-wrap justify-center'>
            {tags.map((val, idx) => (
              <ButtonTag outerClassName='mx-3 my-2' innerClassName='max-w-[300px]' key={idx} name={val} />
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-1 gap-5 mb-16 xl:grid-cols-2 2xl:gap-10'>
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
          </div>
          <div>
            <Button name='ดูเพิ่มเติ่ม'/>
          </div>
        </div>
      </div>
    </section>
  )
}
