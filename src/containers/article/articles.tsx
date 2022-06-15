import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'
import { Button } from '@components/common'
import { ButtonTag, CardArticle } from '@components/index'
import { IBlog } from 'pages/article/[slug]'
import { NextPage } from 'next'
import { ICategory } from 'pages/article'

const tags = ['สุขภาพ', 'ความเครียด', 'covid19', 'Workfromhome', 'โควิด']

interface Props {
  blogPost: IBlog[]
  categories: ICategory[]
}

export const ArticlesContainer: NextPage<Props> = ({ blogPost, categories }) => {
  const skip = 8
  const [offset, setOffset] = useState<number>(8)
  const [blogs, setBlogs] = useState<IBlog[]>(blogPost)
  const handleLoadMore = () => {
    const curOffset = offset + skip
    setOffset(curOffset)
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
        range: JSON.stringify([0, curOffset]),
        sort: JSON.stringify(['order', 'DESC']),
        filter: JSON.stringify({ status: true })
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
      .catch()
  }


  return (
    <section className='py-10 bg-[#FCFCFC] md:py-14'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10 md:mb-16'>
          <div className='mb-5'>
            <p className='font-prompts font-medium text-center h2'>บทความทั้งหมด</p>
          </div>
          <div className='flex flex-wrap justify-center'>
            {_.map(categories, (val, idx) => (
              <ButtonTag outerClassName='mx-3 my-2' innerClassName='max-w-[300px]' key={idx} name={val.title} />
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-1 gap-5 mb-16 w-full xl:grid-cols-2 2xl:gap-10'>
            {_.map(blogs, (val, idx) => (
              <CardArticle key={idx} val={val} />
            ))}
          </div>
          <div>
            <Button
              name='ดูเพิ่มเติ่ม'
              innerClassName='w-[145px] md:w-[170px] 2xl:w-[190px]'
              onClick={handleLoadMore}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
