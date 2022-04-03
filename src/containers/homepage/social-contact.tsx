import React from 'react'
import { Button, ColorLine } from '@components/common'
import { CardShopping } from '@components/index'

import storeConstant from '@constants/mock/stores.json'

const SocialContact: React.FC = () => {
  return (
    <section className='min-h-[900px]'>
      <div className='container mx-auto w-full h-full py-20 md:py-[180px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-full'>
          {/* Content */}
          <div className='flex flex-col px-10'>
            <p className='h2 my-3'>{storeConstant.title}</p>
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
                outerClassName='m-3 lg:m-9'
              />
              <CardShopping
                width={58}
                height={54}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                outerClassName='m-3 lg:m-9'
                imageClassName='bg-[#06C755] rounded-full'
              />
              <CardShopping
                imageClassName='rounded-full'
                height={88}
                width={88}
                name='Line Shopping'
                outerClassName='m-3 lg:m-9'
                image='/images/icons/stores/line-shopping.png'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#ff6633] to-[#f53d2d] rounded-full'
                height={55}
                width={49}
                name='Shoppee'
                outerClassName='m-3 lg:m-9'
                image='/images/icons/stores/shoppee.png'
              />

              <CardShopping
                imageClassName='bg-gradient-to-r from-[#5b8beb] to-[#112283] rounded-full'
                height={60}
                width={67}
                name='Lazada'
                outerClassName='m-3 lg:m-9'
                image='/images/icons/stores/lazada.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialContact
