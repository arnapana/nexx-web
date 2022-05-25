import React from 'react'
import * as _ from 'lodash'
import { ColorLine } from '@components/common'
import { CardActivitySmall } from '@components/index'
import { IBlog } from 'pages/article/[slug]'
import { NextPage } from 'next'

interface Props {
  relativePost: IBlog[]
}

export const ArticleRelativeContainer: NextPage<Props> = ({ relativePost }) => {
  return (
    <section className='py-20 bg-[#FCFCFC]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-20'>
          <div>
            <p className='font-medium text-center h2'>บทความที่เกี่ยวข้อง</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>

        {/* Content */}
        <div className='overflow-auto w-full'>
          <table className='table-fixed'>
            <thead>
              <tr>
                {_.map(relativePost, (val, idx) => (
                  <th className='p-5'>
                    <CardActivitySmall key={idx} post={val}/>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  )
}
