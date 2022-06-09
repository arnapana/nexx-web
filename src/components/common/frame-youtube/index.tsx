import { NextPage } from 'next'
import React from 'react'
import ReactPlayer from 'react-player'

interface Props {
  embedId: string
}

export const FramerYoutube: NextPage<Props> = ({ embedId }) => {
  return (
    <div className='relative h-[30rem] md:h-[40rem] 2xl:h-[42rem]'>
      {/* <iframe
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${embedId}?controls=1&showinfo=0&autoplay=1&autohide=2&modestbranding=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      /> */}
      <ReactPlayer
        url={`https://www.youtube.com/embed/${embedId}`}
        width='100%'
        height='100%'
        volume={0.1}
        loop={true}
        playsinline
      />
    </div>
  )
}

FramerYoutube.defaultProps = {
  embedId: ''
}
