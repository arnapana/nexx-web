import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'

interface INavLink {
  name: string
  to: string
}

export const NavLink: React.FC<INavLink> = ({ name, to }) => {
  const router = useRouter()

  return (
    <header
      className={`w-full h-full flex items-center ${
        router.pathname === to ? 'border-b-8 border-secondary' : 'border-b-8 border-b-transparent'
      }`}
    >
      <Link href={to}>
        <a
          className={`font-prompts font-medium text-xl hover:text-primary whitespace-nowrap ${
            router.pathname === to ? 'text-primary' : 'text-[#3E3E3E]'
          }`}
        >
          {name}
        </a>
      </Link>
    </header>
  )
}
