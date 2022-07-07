import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { CardActivitySmall, CardActivityLarge } from '@components/index'
import { NextPage } from 'next'
import { IBlog } from 'pages/article/[slug]'

interface Props {
  blog: IBlog[]
}

export const BlogHightlight: NextPage<Props> = ({ blog }) => {
  const [posts, setPosts] = useState<{ 0: IBlog | null; 1: IBlog | null; 2: IBlog | null }>({
    0: null,
    1: null,
    2: null
  })
  useEffect(() => {
    if (blog) {
      blog.forEach((val, idx) => {
        setPosts((value) => ({ ...value, [idx]: val }))
      })
    }
  }, [blog])
  return (
    <section className='mb-5 md:mb-12'>
      <div className='container mx-auto'>
        {/* Content */}
        <div className='grid grid-cols-1 xl:grid-cols-3'>
          <div className='hidden col-span-2 place-content-center pb-5 md:grid md:p-5 xl:place-content-start'>
            {posts[0] && <CardActivityLarge key={1} type='article' post={posts[0]} />}
          </div>
          <div className='grid col-span-2 place-content-center pb-5 md:hidden md:p-5 xl:place-content-start'>
            {posts[0] && <CardActivitySmall key={2} type='article' post={posts[0]} />}
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:py-5 xl:grid-cols-1'>
            {posts[1] && <CardActivitySmall key={3} type='article' post={posts[1]} />}
            {posts[2] && <CardActivitySmall key={4} type='article'  post={posts[2]} />}
          </div>
        </div>
      </div>
    </section>
  )
}
