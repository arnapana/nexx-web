import React from 'react'
import Link from 'next/link'

import menuConstant from '@constants/common/menu.json'

const Footer: React.FC = () => {
  return (
    <nav className='flex flex-row md:h-[111px] bg-white'>
      <div className='container mx-auto'>
        <ul className='flex flex-row'>
          <li>
            <Link href='/'>
              <a>{menuConstant.homepage}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.aboutus}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.service}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.telephamacy}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.stores}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.blog}</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>{menuConstant.contact}</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Footer
