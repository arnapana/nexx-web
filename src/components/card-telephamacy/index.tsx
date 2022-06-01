import React, { useState, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import classNames from 'classnames'
interface Props {
  name: string
  list: any
  index: number
  current: number
  onClick: () => void
}

export const CardTelephamacy: React.FC<Props> = ({ name, list, onClick, current, index }) => {
  return (
    <div className='p-5 mb-10' onClick={onClick}>
      <div
        id='telephamacy'
        className={`py-5 px-7 bg-white rounded-[1.25rem] hover:drop-shadow-[0_3px_20px_rgba(120,233,69,0.2)] ${
          current === index ? 'drop-shadow-[0_3px_20px_rgba(120,233,69,0.2)]' : null
        }`}
      >
        <div className='mb-2'>
          <p className={classNames('font-prompts font-medium telephamacy-title h4')}>{name}</p>
        </div>
        <div>
          <ul id='test' className={classNames('telephamacy-list', 'prose max-w-none font-sarabun text-sm md:text-lg')}>
            {list && <MDXRemote {...list} />}
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
          top: 1%;
          left: 0px;
          content: '•';
          font-size: 2rem;
          padding-right: 5px;
        }
      `}</style>
    </div>
  )
}
