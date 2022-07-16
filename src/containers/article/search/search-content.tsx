import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'
import { CardArticle } from '@components/index'
import { Button } from '@components/common'
import { IBlog } from 'pages/article/[slug]'
import { NextPage } from 'next'

interface Props {
  postBlog: IBlog[]
}

export const SearchContentContainer: NextPage<Props> = ({ postBlog }) => {
  const countBlog = 6
  const [blogState, setBlogState] = useState<IBlog[]>(postBlog)

  const handleLoadmore = () => {
    setBlogState(postBlog.slice(0, blogState?.length && blogState?.length + countBlog))
  }

  useEffect(() => {
    setBlogState(postBlog?.slice(0, countBlog))
  }, [postBlog])

  return (
    <section className='mb-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 mb-20 gap-5 md:grid-cols-2 md:gap-16'>
          {_.map(blogState, (val, idx) => (
            <CardArticle key={idx} val={val} />
          ))}
        </div>

        <Button innerClassName='mx-auto' name='ดูเพิ่มเติม' onClick={handleLoadmore} />
      </div>
    </section>
  )
}
