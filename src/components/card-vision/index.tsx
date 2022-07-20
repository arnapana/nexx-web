import React, { useState } from 'react'
import classNames from 'classnames'
import { ImageLoader, ModalOpacity } from '@components/common'
import aboutuConstant from '@constants/mock/aboutus.json'
interface ICardVision {
  id: number
  name: string
  content: string
  description: string
  url?: string
  image: string
  width: string
  height: string
}

export const CardVision: React.FC<ICardVision> = ({ id, name, description, content, image, width, height }) => {
  const [isModal, setModal] = useState<boolean>(false)
  const handleModal = () => {
    setModal((val) => !val)
  }

  return (
    <div className='mx-auto  w-full'>
      <div className='overflow-hidden relative px-6 pt-6 pb-9 min-w-[20rem] h-[16rem] bg-gradient-to-r from-[#364AD9] to-[#298DE3] rounded-2xl md:min-w-[21.5rem]  md:h-[17rem] 2xl:w-[25rem]'>
        {/* Content */}
        <div className='flex flex-col justify-between w-[8rem] h-full md:w-[9.5rem] 2xl:w-[10.5rem]'>
          <div className='mb-2'>
            <p className='font-kanits font-semibold text-white md:text-2xl 2xl:text-3xl'>{name}</p>
          </div>
          <div className='mb-auto'>
            <p className='font-kanits text-base text-white 2xl:text-lg'>{description}</p>
          </div>
          <div className='cursor-pointer'>
            <p className='inline-block font-prompts text-sm text-white underline md:text-base' onClick={handleModal}>
              ดูเพิ่มเติม
            </p>
            {/* Image Arrow*/}
            <div className='inline-block ml-2 md:ml-5'>
              <ImageLoader width={25} height={12} src='/images/icons/enter-green-white-button.png' />
            </div>
          </div>

          {/* Image */}
          <div className={classNames('absolute -right-[8%] -bottom-[8%] w-[240px] h-[250px] max-w-[300px]  max-h-[300px]')}>
            {/* <ImageLoader
              width={aboutuConstant.vision.cards[id].img.w}
              height={aboutuConstant.vision.cards[id].img.h}
              src={aboutuConstant.vision.cards[id].img.src}
            /> */}
            <ImageLoader layout='fill' objectFit='contain' src={image} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalOpacity isModal={isModal} onClick={(event: any) => handleModal()}>
        <div className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 'modal-container')}>
          <div
            className={classNames(
              'relative p-8 min-w-[350px] max-w-[555px] max-h-[477px] bg-white rounded-[2rem] md:py-12 md:px-16',
              'modal-content'
            )}
          >
            <div className='mb-7'>
              <p className='font-prompts font-medium text-center h3'>{name}</p>
            </div>

            <div>
              <p className='font-prompts tracking-wide text-center line-clamp-14 md:line-clamp-10 subtitle'>
                {content}
              </p>
            </div>

            <div
              className='absolute top-0 right-0 translate-x-5 -translate-y-5 cursor-pointer'
              onClick={(event: any) => handleModal()}
            >
              <ImageLoader width={60} height={60} src='/images/icons/cancel-modal.png' />
            </div>
          </div>
        </div>
      </ModalOpacity>
    </div>
  )
}
