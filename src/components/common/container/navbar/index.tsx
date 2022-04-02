import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ImageLoader, NavLink, NavLinkMobile } from '@components/common'
import { ListIcon, CloseIcon } from '@components/icons'

import menuConstant from '@constants/common/menu.json'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true)
  const [isSidebar, setSidebar] = useState<boolean>(false)

  const handleNotify = () => {
    setOpen((val) => !val)
  }
  const handleSidebar = () => {
    setSidebar((val) => !val)
  }

  useEffect(() => {
    // Disable Scrollbar when active cart-page
    if (isSidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isSidebar])

  return (
    <nav className='sticky top-0 z-[20] flex flex-col items-center justify-center bg-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.05)]'>
      {/* Notify */}
      {isOpen ? (
        <div className='hidden w-full xl:flex items-center justify-center bg-primary text-white h-[3.38rem] space-x-5'>
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
        <div className='w-full h-[74px] xl:h-28 flex items-center justify-between xl:justify-center'>
          <div className='relative flex w-[calc(3.5vw+100px)] h-[calc(1.5vw+45px)] justify-center items-center xl:mr-16'>
            <ImageLoader layout='fill' src='/images/logo-nav.png' />
          </div>
          <ul className='hidden xl:flex flex-row items-center space-x-11 h-full'>
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

          {/* Mobile */}
          <div className='flex xl:hidden cursor-pointer' onClick={handleSidebar}>
            <ListIcon className='w-10 h-10 text-primary' />
          </div>

          {/* Slider Menu for Mobile */}
          <div
            className={`z-50 fixed top-0 right-0 xl:hidden bg-white w-1/2 min-h-screen shadow-lg ${
              isSidebar ? 'w-[310px]' : 'w-0'
            } transition-all duration-300 overflow-x-hidden overflow-y-auto`}
          >
            <div className='h-20 flex justify-end items-center p-5 text-primary cursor-pointer' onClick={handleSidebar}>
              <CloseIcon className='w-10 h-10' />
            </div>

            <ul className='flex flex-col items-start px-10 h-full space-y-5'>
              <li>
                <NavLinkMobile to='/' name={menuConstant.homepage} />
              </li>
              <li>
                <NavLinkMobile to='/aboutus' name={menuConstant.aboutus} />
              </li>
              <li>
                <NavLinkMobile to='/services' name={menuConstant.service} />
              </li>
              <li>
                <NavLinkMobile to='/telephamacy' name={menuConstant.telephamacy} />
              </li>
              <li>
                <NavLinkMobile to='/stores' name={menuConstant.stores} />
              </li>
              <li>
                <NavLinkMobile to='/blogs' name={menuConstant.blog} />
              </li>
              <li>
                <NavLinkMobile to='/contacts' name={menuConstant.contact} />
              </li>
            </ul>
          </div>
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
