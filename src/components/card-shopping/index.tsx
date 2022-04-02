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
          'w-[160px] lg:w-[223px] h-[200px] lg:h-[237px] flex flex-col justify-center items-center bg-white shadow-md rounded-3xl drop-shadow-[0_3px_10px_rgba(54,74,217,0.1)]',
          innerClassName
        )}
      >
        <div className={classNames('flex items-center justify-center w-[90px] h-[90px] my-2', imageClassName)}>
          <ImageLoader width={width} height={height} src={image} />
        </div>
        <div>
          <p className={classNames('font-poppins font-medium text-xl lg:text-2xl', textClassName)}>{name}</p>
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
