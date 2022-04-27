import React from 'react'
import classNames from 'classnames'

interface Props {
  handleOnChange: (event: any) => void
  checked: boolean
  name: string
  label: string
  placeholder?: string
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
}

export const InputCheckbok: React.FC<Props> = ({
  handleOnChange,
  checked,
  name,
  label,
  placeholder,
  containerClassName,
  labelClassName,
  inputClassName
}) => {
  return (
    <div className={classNames(containerClassName, 'mb-5')}>
      <div>
        <label className='flex items-center leading-7 text-[#5D5D5D] cursor-pointer'>
          <input
            className={classNames(inputClassName, 'scale-[1.3] md:scale-[2] border-gray-400 mr-2')}
            onChange={handleOnChange}
            placeholder={placeholder}
            type='checkbox'
            checked={checked}
            name={name}
            id={name}
          />
          <span className={classNames(labelClassName,'ml-2')}>{label || ''}</span>
        </label>
      </div>
    </div>
  )
}
