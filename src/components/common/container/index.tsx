import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { NextPage } from 'next'

export const Container: NextPage = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Navbar />
      <div className='mb-auto'>{children}</div>
      <Footer />
    </div>
  )
}
