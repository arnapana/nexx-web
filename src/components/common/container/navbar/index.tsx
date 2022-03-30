import React from 'react'
import Link from 'next/link'
import { NavLink } from '@components/common'

import menuConstant from '@constants/common/menu.json'

const Navbar: React.FC = () => {
  return (
    <nav className='flex flex-row items-center justify-center md:h-[111px] bg-white'>
      <div className='container mx-auto'>
        <div className='w-full flex items-center justify-center'>
          <ul className='flex flex-row space-x-11 '>
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
    </nav>
  )
}

export default Navbar
