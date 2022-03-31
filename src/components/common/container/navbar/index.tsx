import React from 'react'
import { NavLink } from '@components/common'
import { ImageLoader } from '@components/common'

import menuConstant from '@constants/common/menu.json'

const Navbar: React.FC = () => {
  return (
    <nav className='sticky top-0 z-[100] flex flex-row items-center justify-center md:h-28 bg-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.05)]'>
      <div className='container mx-auto w-full h-full'>
        <div className='w-full h-full flex items-center justify-center'>
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
