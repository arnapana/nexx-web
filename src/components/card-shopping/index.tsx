import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'

interface ICardShopping {
  outerClassName?: string
  innerClassName?: string
  imageClassName?: string
  textClassName?: string
  name: string
  image: string
  width: number
  height: number
}

export const CardShopping: React.FC<ICardShopping> = ({
  name,
  image,
  width,
  height,
  outerClassName,
  innerClassName,
  imageClassName,
  textClassName
}) => {
  return (
    <div className={outerClassName}>
      <div
        className={classNames(
          'flex flex-col justify-center items-center bg-white shadow-md rounded-3xl drop-shadow-[0_5px_30px_rgba(54,74,217,0.1)]',
          'min-w-[135px] h-[150px]',
          'md:w-[180px] md:h-[190px]',
          '2xl:w-[218px] 2xl:h-[220px]',
          innerClassName
        )}
      >
        <div
          className={classNames(
            'relative flex items-center justify-center mb-4 p-1 xl:p-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px] 2xl:w-[90px] 2xl:h-[90px]'
          )}
        >
          <ImageLoader width={width} height={height} src={image} />
        </div>
        <div>
          <p className={classNames('font-poppins font-medium text-base md:text-xl 2xl:text-2xl', textClassName)}>
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

CardShopping.defaultProps = {
  imageClassName: '',
  outerClassName: '',
  innerClassName: '',
  textClassName: ''
}
