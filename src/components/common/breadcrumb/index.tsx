import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import BreadCrumbStyle from './breadcrumb-style'

import breadcrumbConstant from '@constants/common/breadcrumb.json'

type breadcrumb = {
  breadCrumb: string
  to: string
}

interface Props {
  outerClassName: string
}

export const BreadCrumb: React.FC<Props> = ({ outerClassName }) => {
  const [breadcrumb, setBreadcrumb] = useState<breadcrumb[]>([])
  const router = useRouter()

  useEffect(() => {
    const routers = router.asPath.split('/')
    routers.shift() // delete first array

    const pathArray: Array<breadcrumb> = routers.map((path, idx) => {
      return { breadCrumb: path, to: `/${routers.slice(0, idx + 1).join('/')}` }
    })

    setBreadcrumb(pathArray)
  }, [router])

  if (breadcrumb?.length <= 0) return null

  return (
    <div className={outerClassName}>
      <nav aria-label='breadcrumb'>
        <ul className='flex items-center text-sm md:text-lg'>
          <BreadCrumbStyle>
            <li>
              <Link href='/'>
                <a className='font-prompts'>หน้าแรก</a>
              </Link>
            </li>
            {breadcrumb.map((val, idx) => (
              <li key={idx}>
                <Link key={idx} href={val.to} passHref>
                  {breadcrumbConstant[val.breadCrumb as keyof typeof breadcrumbConstant]
                    ? breadcrumbConstant[val.breadCrumb as keyof typeof breadcrumbConstant]
                    : val.breadCrumb}
                </Link>
              </li>
            ))}
          </BreadCrumbStyle>
        </ul>
        <style jsx>{`
          li {
            display: list-item;
            padding: 5px 0px 5px 0px;
            margin: 0 3px;
          }
        `}</style>
      </nav>
    </div>
  )
}

BreadCrumb.defaultProps = {
  outerClassName: ''
}
