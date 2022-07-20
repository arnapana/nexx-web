import React from 'react'
import classNames from 'classnames'

interface Props {
  containerClassName?: string
  innerClassName?: string
  inputClassName?: string
  required: boolean
  name: string
  id: string
  label: string
  placeholder: string
  errors: string | undefined
  touch: boolean | undefined
  inputValue: string
  handleOnChange: (data: any) => void
}

export const InputArea: React.FC<Props> = ({
  containerClassName,
  innerClassName,
  inputClassName,
  inputValue,
  name,
  label,
  id,
  placeholder,
  errors,
  touch,
  required,
  handleOnChange
}) => {
  return (
    <div className={classNames(containerClassName, 'mb-5')}>
      <div className={classNames(innerClassName, 'flex flex-col space-y-3')}>
        <label className={`font-kanits font-normal ${required ? 'after:content-["*"] after:text-[#FF0000]' : ''}`} htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          className={classNames(
            inputClassName,
            'w-full bg-[#FCFFFA] placeholder-[#b4b2b2] appearance-none outline-none min-h-[155px] py-7 px-10 border border-[#78DF45] rounded-3xl'
          )}
          onChange={handleOnChange}
        />
      </div>
      {touch && errors ? <div className='text-sm text-red-400'>{errors}</div> : null}
    </div>
  )
}

InputArea.defaultProps = {
  handleOnChange: () => null,
  inputValue: '',
  name: '',
  placeholder: '',
  errors: '',
  containerClassName: '',
  innerClassName: '',
  inputClassName: ''
}
