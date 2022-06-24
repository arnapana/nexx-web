import React from 'react'
import * as _ from 'lodash'
import { CardArticle } from '@components/index'
import { Button } from '@components/common'
import { IBlog } from 'pages/article/[slug]'
import { NextPage } from 'next'

interface Props {
  postBlog: IBlog[]
}

export const SearchContentContainer: NextPage<Props> = ({ postBlog }) => {
  return (
    <section className='mb-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 mb-20 md:grid-cols-2 md:gap-16'>
          {_.map(postBlog, (val, idx) => (
            <CardArticle key={idx} val={val} />
          ))}
        </div>

        <Button innerClassName='mx-auto' name='ดูเพิ่มเติม' />
      </div>
    </section>
  )
}
