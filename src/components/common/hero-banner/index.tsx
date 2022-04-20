import React from 'react'
import classNames from 'classnames'
import { NextPage } from 'next'

interface IHeroBanner {
  sectionClassName?: string
  containerClassName?: string
  src: string
}

export const HeroBanner: NextPage<IHeroBanner> = ({ src, children, containerClassName, sectionClassName }) => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={classNames(sectionClassName, `relative h-[30rem] bg-cover bg-center bg-no-repeat`, '2xl:h-[40rem]')}
      >
        <div className={classNames(containerClassName, 'absolute top-[16%] left-[13%]')}>{children}</div>
      </div>
    </section>
  )
}

HeroBanner.defaultProps = {
  containerClassName: '',
  sectionClassName: ''
}
