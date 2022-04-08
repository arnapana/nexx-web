import React from 'react'

interface Props {
  outerClassName?: string
  name: string
}

export const ButtonTag: React.FC<Props> = ({ outerClassName, name }) => {
  return (
    <div className={outerClassName}>
      <div className='px-5 max-w-[150px] h-7 bg-[#5C6CE0] rounded-full'>
        <p className='font-prompts text-lg text-white truncate'>#{name}</p>
      </div>
    </div>
  )
}

ButtonTag.defaultProps = {
  outerClassName: ''
}
