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
        <div className='mb-10'>
          <div>
            <p className='font-medium text-center h2'>บทความที่เกี่ยวข้อง</p>
          </div>
          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>

        {/* Content */}
        <div className='overflow-x-auto py-10 w-full'>
          <table className='w-full table-fixed'>
            <thead className='w-full'>
              <tr className='flex items-start w-full'>
                {_.map(relativePost, (val, idx) => (
                  <th className='p-3 w-full h-[400px] md:h-[280px]' key={idx}>
                    <CardActivitySmall type='article' post={val} />
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
