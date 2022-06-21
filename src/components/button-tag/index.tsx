import React from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
interface Props {
  id: number
  outerClassName?: string
  innerClassName?: string
  name?: string | undefined
  onClick: (id: number) => void
}

export const ButtonTag: React.FC<Props> = ({ id, innerClassName, outerClassName, name, onClick }) => {
  return (
    <div className={twMerge('cursor-pointer', outerClassName)} onClick={() => onClick(id)}>
      <div className={twMerge('px-5 h-7 bg-[#5C6CE0] rounded-full grid place-items-center', innerClassName)}>
        <p className='min-w-[50px] max-w-[120px] font-prompts text-sm text-white truncate 2xl:text-lg'>#{name}</p>
      </div>
    </div>
  )
}

ButtonTag.defaultProps = {
  outerClassName: '',
  innerClassName: ''
}
