import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'
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
        className={classNames(sectionClassName, `relative h-[30rem] bg-cover bg-center bg-no-repeat`, '2xl:h-[40rem]')}
      >
        <ImageLoader src={src} layout='fill' objectFit='cover' priority={true} placeholder='blur' />
        <div className={classNames(containerClassName, 'absolute top-[16%] left-[13%]')}>{children}</div>
      </div>
    </section>
  )
}

HeroBanner.defaultProps = {
  containerClassName: '',
  sectionClassName: ''
}
