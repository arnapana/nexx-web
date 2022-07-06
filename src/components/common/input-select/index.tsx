import React from 'react'
import * as _ from 'lodash'
import classNames from 'classnames'
import { ArrowDownIcon } from '@components/icons'

interface Props {
  name: string
  data: { val: string | number; label: string }[]
  containerClassName?: string
  innerClassName?: string
  inputClassName?: string
  require: boolean
  label: string
  inputValue: string
  handleOnChange: (data: any) => void
}

export const InputSelect: React.FC<Props> = ({
  name,
  containerClassName,
  innerClassName,
  inputClassName,
  label,
  require,
  inputValue,
  handleOnChange,
  data
}) => {
  return (
    <div className={classNames(containerClassName, 'mb-5')}>
      <div className={classNames(innerClassName, 'flex flex-col space-y-3')}>
        {/* Label */}
        <label htmlFor={name}  className={`font-prompts font-normal ${require ? 'after:content-["*"] after:text-[#FF0000]' : ''}`}>
          {label}
        </label>
        <div className='relative'>
          {/* Select */}
          <select
            name={name}
            id={name}
            className={classNames(
              inputClassName,
              'px-10 w-full h-[70px] text-[#5D5D5D] bg-[#FCFFFA] rounded-2xl border border-[#78DF45] outline-none appearance-none'
            )}
            aria-label='title'
            onChange={handleOnChange}
            value={inputValue}
          >
            <option selected>โปรดเลือก...</option>
            {_.map(data, (val, idx) => (
              <option key={idx} value={val.val}>
                {val.label}
              </option>
            ))}
          </select>
          {/* Arrow */}
          <label htmlFor={name} className='absolute top-1/2 right-[5%] -translate-y-1/2 pointer-events-none'>
            <ArrowDownIcon className='w-8 h-8 text-[#8E8E8E] ' />
          </label>
        </div>
      </div>
    </div>
  )
}
