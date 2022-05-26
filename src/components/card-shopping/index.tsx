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
  url: string
}

export const CardShopping: React.FC<ICardShopping> = ({
  name,
  image,
  width,
  height,
  outerClassName,
  innerClassName,
  imageClassName,
  textClassName,
  url
}) => {
  return (
    <a  className='cursor-pointer' href={url}>
      <div className={outerClassName}>
        <div
          className={classNames(
            'flex flex-col justify-center items-center bg-white shadow-md rounded-3xl drop-shadow-[0_5px_30px_rgba(54,74,217,0.1)]',
            'min-w-[135px] h-[150px]',
            'md:w-[170px] md:h-[180px]',
            innerClassName
          )}
        >
          <div
            className={classNames(
              'relative flex items-center justify-center mb-4 p-1 xl:p-0 w-[70px] h-[70px] md:w-[80px] md:h-[80px]'
            )}
          >
            <ImageLoader width={width} height={height} src={image} />
          </div>
          <div>
            <p className={classNames('font-poppins font-medium text-base md:text-xl', textClassName)}>
              {name}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

CardShopping.defaultProps = {
  imageClassName: '',
  outerClassName: '',
  innerClassName: '',
  textClassName: ''
}
