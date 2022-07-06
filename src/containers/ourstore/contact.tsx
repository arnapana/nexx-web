import { CardShopping } from '@components/card-shopping'
import { ColorLine, Button } from '@components/common'
import React from 'react'

import urlJson from '@constants/mock/url-contact.json'

export const ContactContainer = () => {
  return (
    <section id="store-online" className='py-5 min-h-[500px] md:py-20 2xl:py-[160px]'>
      <div className='container mx-auto w-full h-full '>
        <div className='grid grid-cols-1 gap-5 w-full h-full'>
          {/* Content */}
          <div className='flex flex-col px-10'>
            <p className='my-3 text-center h2'>ร้านยาออนไลน์</p>
            <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='mx-auto w-28 mb-7 mt-4' />
            <div className=''>
              <p className='text-center text-[#5D5D5D] md:px-[20%]'>
                สามารถสั่งซื้อยาสามัญประจําบ้าน วิตามิน และสินค้าสุขภาพได้ตลอด 24 ชั่วโมง ผ่านช่องทางต่างๆของเราที่ Line
                shopping, Line Chat, Shopee และ Lazada
              </p>
            </div>
          </div>
          {/* Card Icons */}
          <div className='col-span-2'>
            <div className='flex flex-wrap justify-center'>
              <CardShopping
                url={urlJson['line-shopping']}
                imageClassName=''
                height={90}
                width={90}
                name='Line Shopping'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/line-shopping.png'
              />

              <CardShopping
                url={urlJson.line}
                width={90}
                height={90}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                outerClassName='m-3 md:m-7 2xl:m-9'
                imageClassName=''
              />
              <CardShopping
                url={urlJson.shopee}
                imageClassName=''
                height={90}
                width={90}
                name='Shopee'
                outerClassName='m-3 md:m-7 2xl:m-9'
                image='/images/icons/stores/shopee.png'
              />

              <CardShopping
                url={urlJson.lazada}
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
