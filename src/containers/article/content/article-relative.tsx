import React from 'react'
import { ColorLine } from '@components/common'
import { CardActivitySmall } from '@components/index'

export const ArticleRelativeContainer = () => {
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
                <th className='p-5'>
                  <CardActivitySmall />
                </th>
                <th className='p-5'>
                  <CardActivitySmall />
                </th>
                <th className='p-5'>
                  <CardActivitySmall />
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  )
}
