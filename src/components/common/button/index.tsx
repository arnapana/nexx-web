import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ImageLoader } from '../next-image'

interface IButton {
  outerClassName?: string
  innerClassName?: string
  name?: string
  onClick?: (event: any) => void
}

export const Button: React.FC<IButton> = ({ name, outerClassName, innerClassName, onClick }) => {
  return (
    <div className={twMerge(outerClassName)}>
      <button
        className={twMerge(
          'bg-primary flex items-center justify-center p-2 rounded-full h-[40px] md:h-[50px] 2xl:h-[60px] space-x-3 px-5 md:px-8',
          innerClassName
        )}
        onClick={onClick}
      >
        <p className='font-prompts text-white whitespace-nowrap md:text-base 2xl:text-xl'>{name}</p>
        <div className={'flex justify-center items-center'}>
          <ImageLoader width={36} height={18} src='/images/icons/enter-button.png' />
        </div>
      </button>
    </div>
  )
}

Button.defaultProps = {
  name: 'Default',
  outerClassName: '',
  innerClassName: ''
}
