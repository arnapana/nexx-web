import React from 'react'
import { Button, ColorLine } from '@components/common'
import { CardShopping } from '@components/index'

const SocialContact: React.FC = () => {
  return (
    <div className='min-h-[900px]'>
      <div className='container mx-auto w-full h-full py-[180px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full h-full'>
          {/* Content */}
          <div className='flex flex-col'>
            <h2 className='font-prompts font-medium text-3xl my-3'>ร้านยาของเรา</h2>
            <ColorLine lineClassName='h-1.5 text-secondary bg-secondary' outerClassName='w-28 mb-7 mt-4' />
            <div className='mt'>
              <p className='font-prompts text-xl text-[#5D5D5D]'>
                สั่งซื้อยาสามัญประจำบ้าน วิตามิน และ สินค้าสุขภาพได้ที่หน้าสาขาร้านยาเน็กซ์ฟาร์มา หรือสั่งซื้อได้ตลอด 24
                ชั่วโมงผ่านช่องออนไลน์ของเรา
              </p>
            </div>
            <div>
              <Button name='ดูเพิ่มเติ่ม' outerClassName='my-8' />
            </div>
          </div>
          {/* Card Icons */}
          <div className='col-span-2'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-[65px]'>
              <CardShopping width={90} height={90} name='Stores' image='/images/icons/stores/store.png' />
              <CardShopping
                width={58}
                height={54}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                imageClassName='bg-[#06C755] rounded-full'
              />
              <CardShopping
                imageClassName='rounded-full'
                height={88}
                width={88}
                name='Line Shopping'
                image='/images/icons/stores/line-shopping.png'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#ff6633] to-[#f53d2d] rounded-full'
                height={55}
                width={49}
                name='Shoppee'
                image='/images/icons/stores/shoppee.png'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#5b8beb] to-[#112283] rounded-full'
                height={60}
                width={67}
                name='Lazada'
                image='/images/icons/stores/lazada.png'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialContact
