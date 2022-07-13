import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface Props {
  handleOnChange: (event: any) => void
  checked: boolean
  name: string
  label: string
  placeholder?: string
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
  linkLabel?: string
  errors: string | undefined
  touch: boolean | undefined
}

export const InputCheckbok: React.FC<Props> = ({
  handleOnChange,
  checked,
  name,
  label,
  placeholder,
  containerClassName,
  labelClassName,
  inputClassName,
  linkLabel,
  errors,
  touch,
}) => {
  return (
    <div className={classNames(containerClassName, 'mb-5')}>
      <div>
        <label className='flex items-center leading-7 text-[#5D5D5D] cursor-pointer'>
          <input
            className={classNames(inputClassName, 'scale-[1.3] border-gray-400 mr-2')}
            onChange={handleOnChange}
            placeholder={placeholder}
            type='checkbox'
            checked={checked}
            name={name}
            id={name}
          />
          {linkLabel ? (
            <Link href={linkLabel}>
              <a target='_blank' rel='noopener noreferrer'>
                <span className={classNames(labelClassName, 'ml-2')}>{label || ''}</span>
              </a>
            </Link>
          ) : (
            <span className={classNames(labelClassName, 'ml-2')}>{label || ''}</span>
          )}
        </label>
        {touch && errors ? <div className='text-sm text-red-400'>{errors}</div> : null}
      </div>
    </div>
  )
}

InputCheckbok.defaultProps = {
  linkLabel: ''
}
