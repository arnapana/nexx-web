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
          'flex flex-col justify-center items-center bg-white shadow-md rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]',
          'w-[150px] h-[200px]',
          'md:w-[180px] md:h-[200px]',
          '2xl:w-[223px] 2xl:h-[237px]',
          innerClassName
        )}
      >
        <div className={classNames('flex items-center justify-center w-[90px] h-[90px] my-2', imageClassName)}>
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
