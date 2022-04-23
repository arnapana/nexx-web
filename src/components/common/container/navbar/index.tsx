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
    <nav className='flex sticky top-0 z-[20] flex-col justify-center items-center bg-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.05)]'>
      {/* Notify */}
      {isOpen ? (
        <div className='hidden justify-center items-center space-x-5 w-full h-[3rem] text-white bg-primary xl:flex'>
          <div className='flex justify-center items-center'>
            <p className='font-prompts text-base text-center 2xl:text-lg'>
              Find the fastest answers to common questions about the latest on COVID-19, travel, and Omicron{' '}
              <span className='underline'>here</span>
            </p>
          </div>
          <div
            className='flex justify-center items-center w-6 h-6 bg-white rounded-full cursor-pointer'
            onClick={handleNotify}
          >
            <ImageLoader width={10} height={10} src='/images/icons/cancel.png' />
          </div>
        </div>
      ) : null}
      <div className='container mx-auto w-full h-full'>
        {/* NavbarList */}
        <div className='flex justify-between items-center w-full h-[74px] lg:h-24 xl:justify-center 2xl:h-[102px]'>
          <div className='flex relative justify-center items-center w-[calc(3.5vw+100px)] h-[calc(1.5vw+33px)] xl:mr-10'>
            <ImageLoader layout='fill' src='/images/logo-nav.png' />
          </div>
          <ul className='hidden flex-row items-center space-x-11 h-full xl:flex'>
            <li>
              <NavLink to={menuConstant.homepage.to} name={menuConstant.homepage.name} />
            </li>
            <li>
              <NavLink to={menuConstant.aboutus.to} name={menuConstant.aboutus.name} />
            </li>
            <li>
              <NavLink to={menuConstant.service.to} name={menuConstant.service.name} />
            </li>
            <li>
              <NavLink to={menuConstant.telephamacy.to} name={menuConstant.telephamacy.name} />
            </li>
            <li>
              <NavLink to={menuConstant.stores.to} name={menuConstant.stores.name} />
            </li>
            <li>
              <NavLink to={menuConstant.review.to} name={menuConstant.review.name} />
            </li>
            <li>
              <NavLink to={menuConstant.article.to} name={menuConstant.article.name} />
            </li>
            <li>
              <NavLink to={menuConstant.contact.to} name={menuConstant.contact.name} />
            </li>
          </ul>

          {/* Mobile */}
          <div className='flex cursor-pointer xl:hidden' onClick={handleSidebar}>
            <ListIcon className='w-10 h-10 text-primary' />
          </div>

          {/* Slider Menu for Mobile */}
          <div
            className={`z-50 fixed top-0 right-0 xl:hidden bg-white w-1/2 min-h-screen shadow-lg ${
              isSidebar ? 'w-[310px]' : 'w-0'
            } transition-all duration-300 overflow-x-hidden overflow-y-auto`}
          >
            <div className='flex justify-end items-center p-5 h-20 text-primary cursor-pointer' onClick={handleSidebar}>
              <CloseIcon className='w-10 h-10' />
            </div>

            <ul className='flex flex-col items-start px-10 space-y-5 h-full'>
              <li>
                <NavLinkMobile to={menuConstant.homepage.to} name={menuConstant.homepage.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.aboutus.to} name={menuConstant.aboutus.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.service.to} name={menuConstant.service.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.telephamacy.to} name={menuConstant.telephamacy.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.review.to} name={menuConstant.review.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.stores.to} name={menuConstant.stores.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.article.to} name={menuConstant.article.name} />
              </li>
              <li>
                <NavLinkMobile to={menuConstant.contact.to} name={menuConstant.contact.name} />
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
