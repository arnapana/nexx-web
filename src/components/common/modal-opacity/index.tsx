import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface IModalOpacity {
  children?: React.ReactNode
  isModal: boolean
  onClick: (event: any) => void
  bgModal?: string
}

export const ModalOpacity: React.FC<IModalOpacity> = ({ children, isModal, onClick, bgModal }) => {
  useEffect(() => {
    // Disable Scrollbar when active
    if (isModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModal])

  return (
    <AnimatePresence>
      {isModal && (
        <motion.div
          key='modal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            isModal ? 'pointer-events-auto' : 'pointer-events-none'
          } fixed top-0 left-0 w-full h-full z-[100]`}
        >
          <div className={twMerge(`z-20 overlay w-full h-full bg-[rgba(0,0,0,0.7)]`, bgModal)} onClick={onClick} />

          <div className=''>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
