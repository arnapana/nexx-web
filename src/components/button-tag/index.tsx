import React from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
interface Props {
  outerClassName?: string
  innerClassName?: string
  name?: string | undefined
  onClick?: () => void
}

export const ButtonTag: React.FC<Props> = ({ innerClassName, outerClassName, name, onClick }) => {
  return (
    <div className={twMerge('cursor-pointer', outerClassName)} onClick={onClick}>
      <div className={twMerge('px-5 h-7 bg-[#5C6CE0] rounded-full grid place-items-center', innerClassName)}>
        <p className='min-w-[50px] max-w-[120px] font-kanits text-sm font-normal text-white truncate pointer-events-none'>#{name}</p>
      </div>
    </div>
  )
}

ButtonTag.defaultProps = {
  outerClassName: '',
  innerClassName: ''
}
