import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ImageLoader, InputField, InputArea, InputSelect, InputCheckbok } from '@components/common'

export const ContactusContainer = () => {
  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', title: '', message: '', accept: false },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
      title: Yup.string().required(),
      message: Yup.string().required()
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API as string}/contacts`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then()
        .catch()
        .finally(() => {
          setSubmitting(false)
          resetForm()
        })
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
              <InputField
                require={true}
                label='เรื่องที่ต้องการติดต่อ'
                placeholder='เรื่องที่ต้องการติดต่อ'
                id='title'
                type='text'
                name='title'
                inputValue={formik.values.title}
                handleOnChange={formik.handleChange}
                errors={formik.errors.title}
                touch={formik.touched.title}
                inputClassName='h-[50px] md:h-[55px]'
              />
              <InputArea
                require={false}
                id='message'
                name='message'
                label='ข้อความ'
                placeholder='โปรดระบุข้อความที่ต้องการ...'
                inputValue={formik.values.message}
                handleOnChange={formik.handleChange}
                errors={formik.errors.message}
                touch={formik.touched.message}
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
          <div className='pt-10'>
            <div className='overflow-hidden relative mb-5 max-w-[620px] max-h-[260px] bg-white rounded-tr-[3rem] rounded-bl-[3rem] md:max-h-[820px]'>
              <button className='flex absolute top-5 left-6 flex-row justify-center items-center p-2 rounded-lg bg-secondary'>
                <ImageLoader width={18} height={18} src='/images/icons/right-arrow.png' />
                <span className='ml-2 font-poppins text-sm font-semibold text-white'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://maps.google.com/?q=${'13.770321228707179'},${'100.57390696137924'}`}
                  >
                    Get Direction
                  </a>
                </span>
              </button>
              <iframe
                className='-mt-36 w-full h-[820px] border-0'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15500.608642960357!2d100.5737353!3d13.769696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x561861afd1a1133a!2sCW%20Tower!5e0!3m2!1sth!2sth!4v1653597044736!5m2!1sth!2sth'
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
