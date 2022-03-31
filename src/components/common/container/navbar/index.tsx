import React, { useState } from 'react'
import { NavLink } from '@components/common'
import { ImageLoader } from '@components/common'

import menuConstant from '@constants/common/menu.json'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true)

  const handleNotify = () => {
    setOpen((val) => !val)
  }

  return (
    <nav className='sticky top-0 z-[100] flex flex-col items-center justify-center bg-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.05)]'>
      {/* Notify */}
      {isOpen ? (
        <div className='w-full flex items-center justify-center bg-primary text-white h-[3.38rem] space-x-5'>
          <div className='flex justify-center items-center'>
            <p className='text-center font-prompts text-lg'>
              Find the fastest answers to common questions about the latest on COVID-19, travel, and Omicron{' '}
              <span className='underline'>here</span>
            </p>
          </div>
          <div
            className='flex items-center justify-center rounded-full w-6 h-6 bg-white cursor-pointer'
            onClick={handleNotify}
          >
            <ImageLoader width={10} height={10} src='/images/icons/cancel.png' />
          </div>
        </div>
      ) : null}
      <div className='container mx-auto w-full h-full'>
        {/* NavbarList */}
        <div className='w-full h-28 flex items-center justify-center'>
          <div className='flex justify-center items-center mr-16'>
            <ImageLoader width={155} height={66} src='/images/logo-nav.png' />
          </div>
          <ul className='flex flex-row items-center space-x-11 h-full'>
            <li>
              <NavLink to='/' name={menuConstant.homepage} />
            </li>
            <li>
              <NavLink to='/aboutus' name={menuConstant.aboutus} />
            </li>
            <li>
              <NavLink to='/services' name={menuConstant.service} />
            </li>
            <li>
              <NavLink to='/telephamacy' name={menuConstant.telephamacy} />
            </li>
            <li>
              <NavLink to='/stores' name={menuConstant.stores} />
            </li>
            <li>
              <NavLink to='/blogs' name={menuConstant.blog} />
            </li>
            <li>
              <NavLink to='/contacts' name={menuConstant.contact} />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        ul li {
          display: flex;
          align-items: center;
          height: 100%;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
