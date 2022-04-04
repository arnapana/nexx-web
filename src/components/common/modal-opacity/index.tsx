import React, { useState, useEffect } from 'react'

interface IModalOpacity {
  children?: React.ReactNode
  isModal: boolean
  onClick: (event: any) => void
}

export const ModalOpacity: React.FC<IModalOpacity> = ({ children, isModal, onClick }) => {
  useEffect(() => {
    // Disable Scrollbar when active
    if (isModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModal])

  if (!isModal) return <></>

  return (
    <div className=''>
      <div
        className={`z-[100] ${
          isModal ? 'animate-fade-in pointer-events-auto' : 'animate-fade-out pointer-events-none'
        } fixed top-0 left-0 w-full h-full `}
      >
        <div className={`z-20 overlay w-full h-full bg-[rgba(0,0,0,0.7)]`} onClick={onClick} />

        <div className='modal-opacity-container'>{children}</div>
      </div>
    </div>
  )
}
