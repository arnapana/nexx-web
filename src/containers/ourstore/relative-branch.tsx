import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'

import { Button, ColorLine, ImageLoader, InputSelect, ModalOpacity, Pagination, TableField } from '@components/common'
import { INetwork } from 'pages/stores'

interface Props {
  networks: INetwork[]
}

export const RelativeBranchContainer: NextPage<Props> = ({ networks }) => {
  const itemPerPage = 5
  const [networkArray, setNetworkArray] = useState<INetwork[]>()
  const [province, setProvince] = useState<any>(null)
  const [district, setDistrict] = useState<any>(null)
  const [isModal, setModal] = useState<boolean>(false)
  const formik = useFormik({
    initialValues: { province: '', district: '' },
    validationSchema: Yup.object({
      province: Yup.string().required('กรุณาระบุจังหวัด'),
      district: Yup.string().required('กรุณาระบุอำเภอ')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setNetworkArray(() =>
        networks.filter((val) => val.district === values.district || val.province === values.province)
      )
      setSubmitting(false)

      resetForm()
    }
  })

  const handlePagination = (index: number) => {
    const cur = itemPerPage * index
    const offset = itemPerPage * index + itemPerPage

    const sliceItems = networks?.slice(cur, offset)
    setNetworkArray(sliceItems)
  }

  const handleModal = (event: any) => {
    event.stopPropagation()
    setModal((val) => !val)
  }

  useEffect(() => {
    const cur = 0
    const offset = itemPerPage

    const sliceItems = networks?.slice(cur, offset)
    setNetworkArray(sliceItems)

    // Set Province
    setProvince(() => networks.map((val) => ({ val: val.province, label: val.province })))
  }, [networks])

  useEffect(() => {
    if (formik.values.province) {
      // Set Province
      setDistrict(() =>
        networks
          .filter((val) => val.province === formik.values.province)
          .map((val) => ({ val: val.district, label: val.district }))
      )
    }
  }, [formik.values.province])

  return (
    <section className='py-5 bg-[#FCFCFC] md:py-14'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='pt-5'>
          <div>
            <p className='text-center h2'>ร้านยาเครือข่าย</p>
          </div>

          <ColorLine lineClassName='h-[5px] text-secondary bg-secondary' outerClassName='mx-auto w-20 md:w-28 my-5' />
        </div>
        <Button
          outerClassName='md:my-10'
          innerClassName='ml-auto w-[145px] md:w-[180px] 2xl:w-[205px]'
          name='ค้นหาสาขา'
          onClick={(event: any) => handleModal(event)}
        />

        <div className='overflow-x-auto py-10'>
          <table className='overflow-hidden mx-auto w-[45rem] rounded-[40px] border border-slate-300 shadow-md table-fixed md:w-[65rem]'>
            <thead className='font-kanits font-medium text-white uppercase bg-[#3E3E3E]'>
              <tr>
                <th className='p-5 w-[10%] text-sm md:text-lg'>ลำดับ</th>
                <th className='p-5 w-[37%] text-sm md:text-lg'>ที่อยู่</th>
                <th className='p-5 w-[18%] text-sm md:text-lg'>เบอร์โทรศัพท์</th>
                <th className='p-5 w-[18%] text-sm md:text-lg'>เวลาทำการ</th>
                <th className='p-5 w-[15%] text-sm md:text-lg'>แผนที่</th>
              </tr>
            </thead>
            <tbody className='font-prompts text-xl text-center'>
              {_.map(networkArray, (val, idx) => (
                <TableField key={idx} val={val} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination pageCount={Math.ceil(networks?.length / itemPerPage)} onChangePage={handlePagination} />

        {/* Modal */}
        <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal(event)}>
          <div className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 'modal-container')}>
            <div
              className={classNames(
                'relative pb-5 p-8 min-w-[350px] max-w-[725px] max-h-[510px] bg-white rounded-[2rem] md:py-12 md:px-16'
              )}
            >
              <div className='mb-7'>
                <p className='font-prompts font-medium text-center h3'>ค้นหาสาขา</p>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <InputSelect
                  name='province'
                  data={province}
                  innerClassName='md:w-[540px]'
                  require={false}
                  label='จังหวัด'
                  inputValue={formik.values.province}
                  handleOnChange={formik.handleChange}
                  inputClassName='h-[50px] md:h-[70px]'
                />
                <InputSelect
                  name='district'
                  data={district}
                  innerClassName='md:w-[540px]'
                  require={false}
                  label='อำเภอ'
                  inputValue={formik.values.district}
                  handleOnChange={formik.handleChange}
                  inputClassName='h-[50px] md:h-[70px]'
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
