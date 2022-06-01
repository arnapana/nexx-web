import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { CardActivitySmall, CardActivityLarge } from '@components/index'
import { IActivities } from 'pages/aboutus'
import { NextPage } from 'next'

interface Props {
  activityPost: IActivities[]
}

export const ArticleContainer: NextPage<Props> = ({ activityPost }) => {
  const [posts, setPosts] = useState<{ 0: IActivities | null; 1: IActivities | null; 2: IActivities | null }>({
    0: null,
    1: null,
    2: null
  })
  useEffect(() => {
    if (activityPost) {
      activityPost.forEach((val, idx) => {
        setPosts((value) => ({ ...value, [idx]: val }))
      })
    }
  }, [activityPost])
  return (
    <section className='mb-5 md:mb-12'>
      <div className='container mx-auto'>
        {/* Content */}
        <div className='grid grid-cols-1 md:gap-10 xl:grid-cols-3'>
          <div className='grid col-span-2 place-content-center mb-10 md:mb-0 xl:place-content-start'>
            {posts[0] && <CardActivityLarge post={posts[0]} /> }
          </div>
          <div className='grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 xl:grid-cols-1'>
            {posts[1] && <CardActivitySmall post={posts[1].blog} />}
            {posts[2] && <CardActivitySmall post={posts[2].blog} />}
          </div>
        </div>
      </div>
    </section>
  )
}
