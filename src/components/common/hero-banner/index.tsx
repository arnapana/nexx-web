import React from 'react'
import classNames from 'classnames'

interface IHeroBanner {
  src: string
}

export const HeroBanner: React.FC<IHeroBanner> = ({ src }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={classNames(`h-[30rem] bg-cover bg-center bg-no-repeat`, '2xl:h-[40rem]')}
      ></div>
    </div>
  )
}
