import React from 'react'
import classNames from 'classnames'
import { CardContact } from '@components/index'
import { Button } from '@components/common'

import contactusContstant from '@constants/mock/contactus.json'

export const ContactStoreContainer = () => {
  return (
    <section className='py-20 2xl:py-36'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='mb-20 2xl:mb-36'>
            <button
              className={classNames(
                'flex items-center py-5 px-10 bg-white rounded-[2rem] drop-shadow-[0_3px_20px_rgba(0,0,0,0.1)]',
                'md:py-7 md:px-16',
                '2xl:py-8 2xl:px-20'
              )}
            >
              <div className='mr-8'>
                <p className='font-kanits text-lg font-medium md:text-3xl xl:leading-[55px] 2xl:text-[2rem]'>ติดต่อเราผ่าน LINE</p>
              </div>
              <a href="https://line.me/R/ti/p/@403viphs">
                <Button name='คลิก' innerClassName='w-[110px] md:w-[135px] 2xl:w-[155px]' />
              </a>
            </button>
          </div>
          <div className={classNames('grid grid-cols-1 md:grid-cols-3 gap-5 2xl:gap-10 justify-center')}>
            {contactusContstant.contacts.cards.map((val, idx) => (
              <CardContact name={val.name} action={val.action} detail={val.details} img={val.img} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
