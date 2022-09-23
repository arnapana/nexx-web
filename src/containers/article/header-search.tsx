import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { InputSearch } from '@components/common'
import { NextPage } from 'next'

interface Props {
  headerPage: {
    title: string
    description: string
  }
}

export const HeaderSearchContainer: NextPage<Props> = ({ headerPage }) => {
  const router = useRouter()
  const [search, setSearch] = useState<any>('')

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  const handleSumbit = () => {
    router.push({ pathname: '/article/search', query: { keyword: search } })
  }
  return (
    <section>
      <div className='mb-10'>
        {/* Header */}
        <div className='mb-10'>
          <div className='mb-5'>
            <p className='font-prompts font-medium text-center h1'>{headerPage?.title ? headerPage?.title : "สาระสุขภาพน่ารู้"}</p>
          </div>
          <div className='px-[10%] md:px-[30%]'>
            <p className='font-prompts text-center whitespace-pre-wrap'>
              {headerPage?.description ? headerPage?.description : <>อ่านบทความด้านสุขภาพอย่างครบถ้วน <br /> และข้อมูลที่มีประโยชน์ ที่เราคัดสรรมาให้แล้วเพื่อคุณ</>}
            </p>
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
