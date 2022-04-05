import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { NextPage } from 'next'

export const Container: NextPage = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-full min-h-screen'>
      <Navbar />
      <div className='mb-auto w-full h-full bg-white'>{children}</div>
      <Footer />
    </div>
  )
}
