import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '../next-image'

interface IButton {
  outerClassName?: string
  innerClassName?: string
  name?: string
  onClick?: () => void
}

export const Button: React.FC<IButton> = ({ name, outerClassName, innerClassName, onClick }) => {
  return (
    <div className={classNames(outerClassName)}>
      <button
        className={classNames(
          'bg-primary flex items-center justify-center p-2 rounded-full h-[40px] md:h-[60px] space-x-3 px-5 md:px-8',
          innerClassName
        )}
        onClick={onClick}
      >
        <p className='font-prompts  md:text-xl text-white whitespace-nowrap'>{name}</p>
        <div className={'flex items-center justify-center'}>
          <ImageLoader width={28} height={18} src='/images/icons/enter-button.png' />
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
