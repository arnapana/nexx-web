import { CardShopping } from '@components/card-shopping'
import { ColorLine, Button } from '@components/common'
import React from 'react'

export const ContactContainer = () => {
  return (
    <section className='py-20 min-h-[500px] md:py-[80px] 2xl:py-[160px]'>
      <div className='container mx-auto w-full h-full '>
        <div className='grid grid-cols-1 gap-5 w-full h-full'>
          {/* Content */}
          <div className='flex flex-col px-10'>
            <p className='my-3 text-center h2'>ร้านยาออนไลน์</p>
            <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 mb-7 mt-4' />
            <div className=''>
              <p className='px-[20%] text-center text-[#5D5D5D]'>
                สามารถสั่งซื้อยาสามัญประจําบ้าน วิตามิน และสินค้าสุขภาพได้ตลอด 24 ชั่วโมง ผ่านช่องทางต่างๆของเราที่ Line
                shopping, Line Chat, Shopee และ Lazada
              </p>
            </div>
          </div>
          {/* Card Icons */}
          <div className='col-span-2'>
            <div className='flex flex-wrap justify-center'>
              <CardShopping
                imageClassName='rounded-full'
                height={88}
                width={88}
                name='Line Shopping'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/line-shopping.png'
              />
              <CardShopping
                width={58}
                height={54}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                outerClassName='m-3 md:m-7 2xl:m-9'
                imageClassName='bg-[#06C755] rounded-full'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#ff6633] to-[#f53d2d] rounded-full'
                height={55}
                width={49}
                name='Shoppee'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/shoppee.png'
              />

              <CardShopping
                imageClassName='bg-gradient-to-r from-[#5b8beb] to-[#112283] rounded-full'
                height={60}
                width={67}
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
