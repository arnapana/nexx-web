import React, { useState, useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@components/icons'
import classNames from 'classnames'

interface Props {
  containerClassName?: string
  innerClassName?: string
  pageCount: number
  disabled?: boolean
  onChangePage: (i: number) => void
}

export const Pagination: React.FC<Props> = ({
  containerClassName,
  innerClassName,
  pageCount,
  disabled,
  onChangePage
}) => {
  const [page, setPage] = useState<number>(0)

  const handlePage = (button: boolean, nextPage: number) => {
    let currentPage: number
    if (button) {
      const newPage = page + nextPage
      if (newPage < 0) {
        // Check Last than 0
        currentPage = page
      } else if (newPage >= pageCount) {
        // Check More than pageCount
        currentPage = page
      } else {
        currentPage = newPage
      }
    } else {
      currentPage = nextPage
    }
    onChangePage(currentPage)
    setPage(currentPage)
  }

  const PageinationElement = () => {
    const listPagination = []
    const offerPage = page + 2 >= pageCount ? pageCount : page === 0 ? page + 3 : page + 2
    const lowerPage = page - 1 < 0 ? page : page === pageCount - 1 ? page - 2 : page - 1

    for (let i = lowerPage; i < offerPage; i++) {
      listPagination.push(
        <li key={i}>
          <button
            disabled={disabled}
            className={`w-11 h-11 ${
              i === page ? 'bg-primary text-white' : 'bg-[#F7F7F7] text-[#5D5D5D]'
            } transition-colors duration-500 hover:text-white  hover:bg-primary rounded-xl`}
            onClick={() => handlePage(false, i)}
          >
            {i + 1}
          </button>
        </li>
      )
    }
    return listPagination
  }

  return (
    <div className={classNames(containerClassName, 'my-10')}>
      <div className={classNames(innerClassName, 'mx-auto w-fit')}>
        <ul className='flex flex-row space-x-4'>
          <li className='grid place-items-center'>
            <button
              disabled={disabled}
              className='grid place-items-center w-7 h-7 text-white bg-[#364AD9] rounded-full opacity-80'
              onClick={() => handlePage(true, -1)}
            >
              <ArrowLeftIcon className='w-5 h-5' />
            </button>
          </li>
          {PageinationElement()}
          <li className='grid place-items-center'>
            <button
              disabled={disabled}
              className='grid place-items-center w-7 h-7 text-white bg-[#364AD9] rounded-full opacity-80'
              onClick={() => handlePage(true, 1)}
            >
              <ArrowRightIcon className='w-5 h-5' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

Pagination.defaultProps = {
  containerClassName: '',
  innerClassName: '',
  pageCount: 1,
  disabled: false
}
