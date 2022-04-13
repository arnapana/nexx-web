import React from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'

interface IHeroBanner {
  src: string
}

export const HeroBanner: NextPage<IHeroBanner> = ({ src, children }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={classNames(`relative h-[30rem] bg-cover bg-center bg-no-repeat`, '2xl:h-[40rem]')}
      >
        <div className='absolute top-[27%] left-[13%]'>{children}</div>
      </div>
    </div>
  )
}
