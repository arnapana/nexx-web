import React, { useState } from 'react'
import { InputSearch } from '@components/common'

export const HeaderSearchContainer = () => {
  const [search, setSearch] = useState<any>('')

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  return (
    <section>
      <div className='mb-10'>
        {/* Header */}
        <div className='mb-10'>
          <div className='mb-5'>
            <p className='font-prompts text-[3rem] font-medium text-center'>สาระสุขภาพน่ารู้</p>
          </div>
          <div className='px-[30%]'>
            <p className='font-prompts font-normal text-center'>
              อ่านบทความด้านสุขภาพอย่างครบถ้วน <br /> และข้อมูลที่มีประโยชน์ ที่เราคัดสรรมาให้แล้วเพื่อคุณ
            </p>
          </div>
        </div>
        {/* Search */}
        <div className='flex justify-center'>
          <InputSearch
            name='search'
            type='text'
            placeholder='ค้นหาบทความที่เป็นประโยชน์สำหรับคุณ'
            inputClassName='w-[400px] text-[#5D5D5D] font-prompt font-light text-lg'
            inputValue={search}
            handleOnChange={handleSearch}
          />
        </div>
      </div>
    </section>
  )
}
