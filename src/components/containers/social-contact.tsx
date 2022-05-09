import React from 'react'
import { Button, ColorLine } from '@components/common'
import { CardShopping } from '@components/index'

import storeConstant from '@constants/mock/stores.json'

export const SocialContact: React.FC = () => {
  return (
    <section className='py-10 min-h-[500px] bg-[#FCFCFC] md:py-[80px]'>
      <div className='container mx-auto w-full h-full '>
        <div className='grid grid-cols-1 gap-5 w-full h-full md:grid-cols-3'>
          {/* Content */}
          <div className='flex flex-col 2xl:px-10'>
            <p className='my-3 h2'>{storeConstant.title}</p>
            <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='w-28 mb-7 mt-4' />
            <div className=''>
              <p className='text-[#5D5D5D]'>{storeConstant.content}</p>
            </div>
            <div>
              <Button name='ดูเพิ่มเติ่ม' outerClassName='my-8' />
            </div>
          </div>
          {/* Card Icons */}
          <div className='col-span-2'>
            <div className='flex flex-wrap justify-center'>
              <CardShopping
                width={90}
                height={90}
                name='Stores'
                image='/images/icons/stores/store.png'
                imageClassName='w-[90px] h-[90px]'
                outerClassName='m-3 md:m-7 2xl:m-9'
              />
              <CardShopping
                width={90}
                height={90}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                outerClassName='m-3 md:m-7 2xl:m-9'
                imageClassName=''
              />
              <CardShopping
                imageClassName=''
                height={90}
                width={90}
                name='Line Shopping'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/line-shopping.png'
              />
              <CardShopping
                imageClassName=''
                height={90}
                width={90}
                name='Shopee'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/shopee.png'
              />

              <CardShopping
                imageClassName=''
                height={90}
                width={90}
                name='Lazada'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/lazada.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
