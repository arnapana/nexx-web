import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'

interface INavLinkMobile {
  name: string
  to: string
}

export const NavLinkMobile: React.FC<INavLinkMobile> = ({ name, to }) => {
  const router = useRouter()

  return (
    <header className={`w-full h-full flex items-center `}>
      <Link href={to}>
        <a
          className={`font-kanits font-light text-lg hover:text-primary ${
            router.pathname === to ? 'text-primary' : 'text-[#3E3E3E]'
          }`}
        >
          {name}
        </a>
      </Link>
    </header>
  )
}
