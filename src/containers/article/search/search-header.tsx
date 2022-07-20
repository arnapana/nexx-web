import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { InputSearch } from '@components/common'

export const SearchHeaderContainer = () => {
  const router = useRouter()
  const [search, setSearch] = useState<any>('')

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  const handleSumbit = () => {
    router.push({ pathname: '/article/search', query: { keyword: search } })
  }

  return (
    <section className='mb-12'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10'>
          <div className='mb-5'>
            <p className='font-kanits font-medium text-center h2'>ผลการค้นหาคำว่า</p>
          </div>
          <div className='px-[30%]'>
            <p className='font-kanits font-normal text-center text-primary h2'>{`“${router.query['keyword']}“`}</p>
          </div>
        </div>
        {/* Search */}
        <div className='flex justify-center'>
          <InputSearch
            name='search'
            type='text'
            placeholder='ค้นหาบทความที่เป็นประโยชน์สำหรับคุณ'
            inputClassName='w-[350px] md:w-[400px] text-[#5D5D5D] font-prompt font-light text-base md:text-lg'
            inputValue={search}
            handleOnChange={handleSearch}
            onSubmit={handleSumbit}
          />
        </div>
      </div>
    </section>
  )
}
