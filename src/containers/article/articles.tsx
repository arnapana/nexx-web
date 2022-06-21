import React, { useState, useEffect, Fragment } from 'react'
import ContentLoader from 'react-content-loader'
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
  const [category, setCategory] = useState<any>(null)
  const [offset, setOffset] = useState<number>(8)
  const [blogs, setBlogs] = useState<IBlog[]>(blogPost)

  const handleFilterCategory = (id: number) => {
    setCategory(id)
    const curOffset = offset + skip
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API as string}/blogs?${new URLSearchParams({
        range: JSON.stringify([0, curOffset]),
        sort: JSON.stringify(['order', 'DESC']),
        filter: JSON.stringify({ categoryId: id })
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
      .catch()
  }

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
              <ButtonTag
                id={val.id}
                outerClassName='mx-3 my-2'
                innerClassName={`max-w-[300px] ${val.id === category && "bg-black"}`}
                key={idx}
                name={val.title}
                onClick={handleFilterCategory}
              />
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-1 gap-5 mb-16 w-full xl:grid-cols-2 2xl:gap-10'>
            {blogs.length > 0
              ? _.map(blogs, (val, idx) => <CardArticle key={idx} val={val} />)
              : _.map(Array(4), (val, idx) => (
                  <Fragment key={idx}>
                    <ContentLoader
                      speed={2}
                      width='100%'
                      height={190}
                      viewBox='0 0 640 190'
                      backgroundColor='#f3f3f3'
                      foregroundColor='#ecebeb'
                      className='hidden md:block'
                    >
                      <rect x='8' y='8' rx='15' ry='15' width='188' height='177' />
                      <rect x='215' y='9' rx='0' ry='0' width='295' height='26' />
                      <rect x='214' y='157' rx='10' ry='10' width='99' height='25' />
                      <rect x='338' y='156' rx='10' ry='10' width='99' height='25' />
                      <rect x='216' y='53' rx='0' ry='0' width='295' height='88' />
                    </ContentLoader>
                    <ContentLoader
                      speed={2}
                      width={380}
                      height={280}
                      viewBox='0 0 380 280'
                      backgroundColor='#f3f3f3'
                      foregroundColor='#ecebeb'
                      className='block md:hidden'
                    >
                      <rect x='13' y='8' rx='15' ry='15' width='341' height='126' />
                      <rect x='8' y='249' rx='10' ry='10' width='99' height='25' />
                      <rect x='11' y='177' rx='0' ry='0' width='309' height='62' />
                      <rect x='122' y='249' rx='10' ry='10' width='99' height='25' />
                      <rect x='12' y='142' rx='0' ry='0' width='105' height='26' />
                      <rect x='74' y='156' rx='0' ry='0' width='1' height='0' />
                    </ContentLoader>
                  </Fragment>
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
