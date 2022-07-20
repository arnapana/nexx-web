import React, { useState, useEffect, forwardRef } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import classNames from 'classnames'
interface Props {
  id: any
  name: string
  list: any
  index: number
  current: number
  onClick: () => void
}

const CardTelephamacy = forwardRef<any, Props>((props, ref) => {
  return (
    <div id={props.id} ref={ref} className='p-5 cursor-pointer' onClick={props.onClick}>
      <div
        id='telephamacy'
        className={`py-5 px-7 bg-white rounded-[1.25rem] hover:drop-shadow-[0_3px_20px_rgba(120,233,69,0.2)] ${
          props.current === props.index ? 'drop-shadow-[0_3px_20px_rgba(120,233,69,0.2)]' : null
        }`}
      >
        <div className='mb-2'>
          <p
            className={classNames(
              `font-kanits font-medium telephamacy-title before:content-[""] ${props.current === props.index ? 'before:bg-[#29cf00]' : 'before:bg-[#364ad9]'}`
            )}
          >
            {props.name}
          </p>
        </div>
        <div>
          <ul id='test' className={classNames('telephamacy-list', 'prose max-w-none font-kanits text-sm md:text-lg')}>
            {props.list && <MDXRemote {...props.list} />}
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
          vertical-align: middle;
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
})

CardTelephamacy.displayName = 'CardTelephamacy'

export { CardTelephamacy }
