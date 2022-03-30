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
          'w-[223px] h-[237px] flex flex-col justify-center items-center bg-white shadow-md rounded-3xl',
          innerClassName
        )}
      >
        <div className={classNames('flex items-center justify-center w-[90px] h-[90px] my-2', imageClassName)}>
          <ImageLoader width={width} height={height} src={image} />
        </div>
        <div>
          <p className={classNames('font-poppins font-medium text-2xl', textClassName)}>{name}</p>
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
