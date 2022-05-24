import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'
import { NextPage } from 'next'

interface IHeroBanner {
  sectionClassName?: string
  containerClassName?: string
  src: string
  srcMobile?: string
}

export const HeroBanner: NextPage<IHeroBanner> = ({
  src,
  srcMobile,
  children,
  containerClassName,
  sectionClassName
}) => {
  return (
    <section>
      {srcMobile && (
        <div
          className={classNames(
            sectionClassName,
            { 'block lg:hidden': srcMobile },
            `relative h-[30rem] bg-cover bg-center bg-no-repeat`,
            '2xl:h-[40rem]'
          )}
        >
          <ImageLoader src={srcMobile} layout='fill' objectFit='cover' priority={true} />
          <div className={classNames(containerClassName, 'absolute top-[16%] left-[13%]')}>{children}</div>
        </div>
      )}
      <div
        className={classNames(
          sectionClassName,
          { 'hidden lg:block': srcMobile },
          `relative h-[30rem] bg-cover bg-center bg-no-repeat`,
          '2xl:h-[40rem]'
        )}
      >
        <ImageLoader src={src} layout='fill' objectFit='cover' priority={true} />
        <div className={classNames(containerClassName, 'absolute top-[16%] left-[16%]')}>{children}</div>
      </div>
    </section>
  )
}

HeroBanner.defaultProps = {
  containerClassName: '',
  sectionClassName: '',
  srcMobile: ''
}
