import React from 'react'
import classNames from 'classnames'
interface Props {
  outerClassName?: string
  innerClassName?: string
  name?: string | undefined
}

export const ButtonTag: React.FC<Props> = ({ innerClassName, outerClassName, name }) => {
  return (
    <div className={outerClassName}>
      <div className={classNames(innerClassName, 'px-5 h-7 bg-[#5C6CE0] rounded-full grid place-items-center')}>
        <p className='min-w-[50px] max-w-[120px] font-prompts text-sm text-white truncate 2xl:text-lg'>#{name}</p>
      </div>
    </div>
  )
}

ButtonTag.defaultProps = {
  outerClassName: '',
  innerClassName: ''
}
