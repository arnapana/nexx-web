import { NextPage } from 'next'
import React from 'react'

interface Props {
  embedId: string
}

export const FramerYoutube: NextPage<Props> = ({ embedId }) => {
  return (
    <div className='relative h-[30rem] md:h-[40rem]'>
      <iframe
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

FramerYoutube.defaultProps = {
  embedId: ''
}
