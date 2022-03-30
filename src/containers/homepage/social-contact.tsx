import React from 'react'
import { Button } from '@components/common'
import { CardShopping } from '@components/index'

const SocialContact: React.FC = () => {
  return (
    <div className='h-[900px]'>
      <div className='container mx-auto w-full h-full py-[180px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full h-full'>
          {/* Content */}
          <div className='flex flex-col'>
            <h2 className='font-prompts font-medium text-3xl my-3'>ร้านยาของเรา</h2>
            <div>
              <p className='font-prompts text-xl'>
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
                width={45}
                height={15}
                name='Line Chat'
                image='/images/icons/stores/line-chat.png'
                imageClassName='bg-[#000] rounded-full'
              />
              <CardShopping
                imageClassName='bg-[#000] rounded-full'
                height={45}
                width={50}
                name='Line Shopping'
                image='/images/icons/stores/line-shopping.png'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#ff6633] to-[#f53d2d] rounded-full'
                height={50}
                width={55}
                name='Shoppee'
                image='/images/icons/stores/shoppee.png'
              />
              <CardShopping
                imageClassName='bg-gradient-to-r from-[#5b8beb] to-[#112283] rounded-full'
                height={65}
                width={60}
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
