import React from 'react'
import { CardContact } from '@components/index'
import { Button } from '@components/common'

import contactusContstant from '@constants/mock/contactus.json'

export const ContactStoreContainer = () => {
  return (
    <section className='py-36'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='mb-36'>
            <button className='flex items-center py-9 px-20 bg-white rounded-[2rem] drop-shadow-[0_3px_20px_rgba(0,0,0,0.1)]'>
              <div className='mr-8'>
                <p className='font-prompts font-medium h2'>ติดต่อร้านยาของเรา</p>
              </div>
              <Button name='คลิก' />
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {contactusContstant.contacts.cards.map((val, idx) => (
              <CardContact name={val.name} detail={val.details} img={val.img} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
