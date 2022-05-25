import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { CardActivitySmall, CardActivityLarge } from '@components/index'
import { IActivities } from 'pages/aboutus'
import { NextPage } from 'next'

interface Props {
  activityPost: IActivities[]
}

export const ArticleContainer: NextPage<Props> = ({ activityPost }) => {
  return (
    <section className='mb-5 md:mb-12'>
      <div className='container mx-auto'>
        {/* Content */}
        <div className='grid grid-cols-1 md:gap-10 xl:grid-cols-3'>
          <div className='grid col-span-2 place-content-center mb-10 md:mb-0 xl:place-content-start'>
            {/* Order 1 */}
            {activityPost[0] && <CardActivityLarge post={activityPost[0]} />}
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1 place-items-center'>
            {activityPost[1] && <CardActivitySmall post={activityPost[1].blog} />}
            {activityPost[2] && <CardActivitySmall post={activityPost[2].blog} />}
          </div>
        </div>
      </div>
    </section>
  )
}
