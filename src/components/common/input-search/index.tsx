import React from 'react'
import classNames from 'classnames'
import { ImageLoader } from '@components/common'

interface Props {
  containerClassName?: string
  innerClassName?: string
  inputClassName?: string
  name: string
  type: string
  placeholder: string
  inputValue: string
  handleOnChange: (data: any) => void
}

export const InputSearch: React.FC<Props> = ({
  containerClassName,
  innerClassName,
  inputClassName,
  name,
  type,
  placeholder,
  inputValue,
  handleOnChange
}) => {
  return (
    <div className={classNames(containerClassName, '')}>
      <div className={classNames(innerClassName, 'w-fit')}>
        <label className={`relative block font-prompts font-normal`} htmlFor={name}>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleOnChange}
            className={classNames(
              inputClassName,
              'bg-[#FCFFFA] placeholder-[#5D5D5D] appearance-none outline-none max-h-[47px] py-7 px-10 border border-[#78DF45] rounded-full'
            )}
          />
          <button className='absolute top-1/2 right-[5%] w-[28px] h-[28px] -translate-y-1/2'>
            <ImageLoader width={28} height={28} src='/images/icons/icon_search.png' />
          </button>
        </label>
      </div>
    </div>
  )
}

InputSearch.defaultProps = {}
