import React from 'react'

interface Props {
  name: string
  list: string[]
}

export const CardTelephamacy: React.FC<Props> = ({ name, list }) => {
  return (
    <div className='mb-10'>
      <div
        id='telephamacy'
        className='py-5 px-7 bg-white rounded-[1.25rem] hover:drop-shadow-[0_3px_20px_rgba(120,233,69,0.2)]'
      >
        <div className='mb-2'>
          <p className='font-prompts font-medium telephamacy-title h3 whitespace-nowrap'>{name}</p>
        </div>
        <div>
          <ul id='test' className='telephamacy-list'>
            {list.map((val, idx) => (
              <li key={idx} className='font-prompts text-[#5D5D5D]'>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .telephamacy-title {
          position: relative;
        }
        .telephamacy-title::before {
          content: '';
          width: 11px;
          height: 11px;
          border-radius: 50%;
          margin-right: 10px;
          display: inline-block;
          background-color: #364ad9;
          vertical-align: middle;
        }
        #telephamacy:hover .telephamacy-title::before {
          background-color: #29cf00;
        }

        ul.telephamacy-list {
          list-style: none;
          padding-left: 2rem;
        }
        .telephamacy-list li {
          position: relative;
          padding-left: 1.5rem;
        }
        .telephamacy-list li::before {
          position: absolute;
          top: -8px;
          left: 0px;
          content: '•';
          font-size: 2rem;
          padding-right: 5px;
        }
      `}</style>
    </div>
  )
}
