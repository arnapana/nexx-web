import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { Button, ColorLine, ImageLoader, InputSelect, ModalOpacity, Pagination, TableField } from '@components/common'

export const RelativeBranchContainer = () => {
  const formik = useFormik({
    initialValues: { provide: '', district: '' },
    validationSchema: Yup.object({
      provide: Yup.string().required('กรุณาระบุจังหวัด'),
      district: Yup.string().required('กรุณาระบุอำเภอ')
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values)
    }
  })
  const [isModal, setModal] = useState<boolean>(false)

  const handleModal = (event: any) => {
    event.stopPropagation()
    setModal((val) => !val)
  }

  return (
    <section className='py-20 bg-[#FCFCFC]'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='mb-14'>
          <div>
            <p className='text-center h2'>ร้านยาเครือข่าย</p>
          </div>

          <ColorLine lineClassName='h-[5px] text-secondary bg-secondary' outerClassName='mx-auto w-28 my-5' />
        </div>
        <Button outerClassName='my-10' innerClassName='ml-auto' name='ค้นหาสาขา' onClick={(event: any) => handleModal(event)}/>

        <div className='overflow-x-auto'>
          <table className='overflow-hidden mx-auto w-[65rem] rounded-[40px] border-collapse table-fixed'>
            <thead className='font-prompts font-medium text-white uppercase bg-[#3E3E3E]'>
              <tr>
                <th className='p-5 w-[12%]'>ลำดับ</th>
                <th className='p-5 w-[37%]'>ที่อยู่</th>
                <th className='p-5 w-[18%]'>เบอร์โทรศัพท์</th>
                <th className='p-5 w-[18%]'>เวลาทำการ</th>
                <th className='p-5 w-[15%]'>แผนที่</th>
              </tr>
            </thead>
            <tbody className='font-prompts text-xl text-center'>
              <TableField />
              <TableField />
              <TableField />
              <TableField />
              <TableField />
              <TableField />
            </tbody>
          </table>

          <Pagination pageCount={5} onChangePage={(val) => console.log(val)} />
        </div>

        {/* Modal */}
        <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal(event)}>
          <div className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 'modal-container')}>
            <div
              className={classNames(
                'relative p-8 min-w-[350px] max-w-[725px] max-h-[510px] bg-white rounded-[2rem] md:py-12 md:px-16',
                'modal-content'
              )}
            >
              <div className='mb-7'>
                <p className='font-prompts font-medium text-center h3'>ค้นหาสาขา</p>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <InputSelect
                  innerClassName='w-[540px]'
                  require={false}
                  label='จังหวัด'
                  inputValue={formik.values.provide}
                  handleOnChange={formik.handleChange}
                />
                <InputSelect
                  innerClassName='w-[540px]'
                  require={false}
                  label='อำเภอ'
                  inputValue={formik.values.district}
                  handleOnChange={formik.handleChange}
                />
                <Button
                  outerClassName='my-10'
                  innerClassName='mx-auto'
                  name='ค้นหา'
                  onClick={(event: any) => handleModal(event)}
                />
              </form>

              <div
                className='absolute top-0 right-0 translate-x-5 -translate-y-5 cursor-pointer'
                onClick={(event: any) => handleModal(event)}
              >
                <ImageLoader width={60} height={60} src='/images/icons/cancel-modal.png' />
              </div>
            </div>
          </div>
        </ModalOpacity>
      </div>
    </section>
  )
}
