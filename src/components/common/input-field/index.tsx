import React from 'react'
import classNames from 'classnames'

interface Props {
  containerClassName?: string
  innerClassName?: string
  inputClassName?: string
  require: boolean
  label: string
  name: string
  id: string
  type: string
  placeholder: string
  errors: string | undefined
  touch: boolean | undefined
  inputValue: string
  handleOnChange: (data: any) => void
}

export const InputField: React.FC<Props> = ({
  containerClassName,
  innerClassName,
  inputClassName,
  inputValue,
  label,
  name,
  id,
  type,
  placeholder,
  errors,
  touch,
  require,
  handleOnChange
}) => {
  return (
    <div className={classNames(containerClassName, 'mb-5')}>
      <div className={classNames(innerClassName, 'flex flex-col space-y-3')}>
        <label
          className={`font-kanits font-normal ${require ? 'after:content-["*"] after:text-[#FF0000]' : ''}`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          className={classNames(
            inputClassName,
            'bg-[#FCFFFA] placeholder-[#b4b2b2] appearance-none outline-none max-h-[70px] h-[70px] px-10 border border-[#78DF45] rounded-2xl'
          )}
          onChange={handleOnChange}
        />
      </div>
      {touch && errors ? <div className='text-sm text-red-400'>{errors}</div> : null}
    </div>
  )
}

InputField.defaultProps = {
  handleOnChange: () => null,
  inputValue: '',
  name: '',
  type: 'text',
  placeholder: '',
  errors: '',
  containerClassName: '',
  innerClassName: '',
  inputClassName: ''
}
