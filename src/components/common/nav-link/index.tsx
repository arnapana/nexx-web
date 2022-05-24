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
      } hover-underline-from-left`}
    >
      <Link href={to}>
        <a
          className={`font-kanits font-medium lg:text-lg hover:text-primary whitespace-nowrap ${
            router.pathname === to ? 'text-primary' : 'text-[#3E3E3E]'
          }`}
        >
          {name}
        </a>
      </Link>
      <style jsx>{`
        .hover-underline-from-left {
          position: relative;
        }
        .hover-underline-from-left::before {
          content: '';
          position: absolute;
          z-index: 100;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 8px;
          background-color: #78df45;
          transition: width 0.5s ease-in-out;
        }
        .hover-underline-from-left:hover::before {
          width: 100%;
        }
      `}</style>
    </header>
  )
}
