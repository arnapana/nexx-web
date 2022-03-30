import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '../next-image'

interface IButton {
  outerClassName?: string
  innerClassName?: string
  name?: string
}

export const Button: React.FC<IButton> = ({ name, outerClassName, innerClassName }) => {
  return (
    <div className={classNames(outerClassName)}>
      <button
        className={classNames('bg-primary flex items-center justify-center p-2 rounded-full h-[60px]', innerClassName)}
      >
        <p className='font-prompts text-xl text-white mx-6 whitespace-nowrap'>{name}</p>
        <div className={'flex items-center justify-center mr-6'}>
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
