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
    <header>
      <Link href={to}>
        <a
          className={`font-prompts font-medium text-xl hover:text-primary ${
            router.pathname === to ? 'border-b-4 border-secondary' : ''
          }`}
        >
          {name}
        </a>
      </Link>
    </header>
  )
}
