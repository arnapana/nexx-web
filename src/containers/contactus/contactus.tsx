import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ImageLoader, InputField, InputArea, InputSelect, InputCheckbok } from '@components/common'

export const ContactusContainer = () => {
  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', title: '', details: '', accept: false },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
      title: Yup.string().required(),
      details: Yup.string().required()
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values)
    }
  })

  return (
    <section className=''>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-10'>
          <p className='font-prompts text-2xl font-medium text-center md:text-3xl 2xl:text-[3rem]'>ติดต่อเรา</p>
        </div>
        {/* Content */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='px-5 md:pr-[10%]'>
            <form onSubmit={formik.handleSubmit}>
              <InputField
                require={true}
                label='ชื่อ - นามสกุล'
                placeholder='ชื่อ - นามสกุล'
                id='name'
                type='text'
                name='name'
                inputValue={formik.values.name}
                handleOnChange={formik.handleChange}
                errors={formik.errors.name}
                touch={formik.touched.name}
                inputClassName='h-[50px] md:h-[55px]'
              />
              <InputField
                require={true}
                label='เบอร์โทรศัพท์'
                placeholder='เบอร์โทรศัพท์'
                id='phone'
                type='text'
                name='phone'
                inputValue={formik.values.phone}
                handleOnChange={formik.handleChange}
                errors={formik.errors.phone}
                touch={formik.touched.phone}
                inputClassName='h-[50px] md:h-[55px]'
              />
              <InputField
                require={true}
                label='อีเมล'
                placeholder='อีเมล'
                id='email'
                type='text'
                name='email'
                inputValue={formik.values.email}
                handleOnChange={formik.handleChange}
                errors={formik.errors.email}
                touch={formik.touched.email}
                inputClassName='h-[50px] md:h-[55px]'
              />
              <InputSelect
                label='เรื่องที่ต้องการติดต่อ'
                require={true}
                inputValue={formik.values.title}
                handleOnChange={formik.handleChange}
                inputClassName='h-[50px] md:h-[55px]'
              />
              <InputArea
                require={false}
                id='details'
                name='details'
                label='ข้อความ'
                placeholder='โปรดระบุข้อความที่ต้องการ...'
                inputValue={formik.values.details}
                handleOnChange={formik.handleChange}
                errors={formik.errors.details}
                touch={formik.touched.details}
              />
              <InputCheckbok
                name='accept'
                label='ยอมรับนโยบายความเป็นส่วนตัวและนโยบายคุกกี้'
                checked={formik.values.accept}
                handleOnChange={formik.handleChange}
                labelClassName='text-sm md:text-xl'
              />
              <div>
                <button
                  type='submit'
                  className='w-full h-[50px] font-prompts font-medium text-white bg-[#78DF45] rounded-3xl md:h-[55px]'
                >
                  ส่งข้อความหาเรา
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className='overflow-hidden relative mb-5 max-w-[620px] max-h-[260px] bg-white rounded-tr-[3rem] rounded-bl-[3rem] md:max-h-[820px]'>
              <button className='flex absolute top-5 left-6 flex-row justify-center items-center p-2 rounded-lg bg-secondary'>
                <ImageLoader width={18} height={18} src='/images/icons/right-arrow.png' />
                <span className='ml-2 font-poppins text-sm font-semibold text-white'>Get Direction</span>
              </button>
              <iframe
                className='-mt-10 w-full h-[820px] border-0'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.413107201355!2d100.90005111528926!3d12.945396690873062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3446075ca93b38f!2zMTLCsDU2JzQzLjQiTiAxMDDCsDU0JzA4LjEiRQ!5e0!3m2!1sth!2sth!4v1648752408749!5m2!1sth!2sth'
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
