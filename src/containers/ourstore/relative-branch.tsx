import { Button, ColorLine } from '@components/common'
import React from 'react'

export const RelativeBranchContainer = () => {
  return (
    <section className='py-20 bg-[#FCFCFC]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-14'>
          <div>
            <p className='text-center h2'>ร้านยาเครือข่าย</p>
          </div>

          <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>
        <Button outerClassName='my-10' innerClassName='ml-auto' name='ค้นหาสาขา' />
      </div>
    </section>
  )
}
