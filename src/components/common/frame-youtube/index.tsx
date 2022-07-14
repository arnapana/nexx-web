import { NextPage } from 'next'
import React, { useRef, useEffect, useState } from 'react'
import YouTubePlayer from 'react-player/youtube'
import ReactPlayer from 'react-player/lazy'

interface Props {
  playing: boolean
  embedId: string
}

export const FramerYoutube: NextPage<Props> = ({ playing, embedId }) => {
  const playerRef = useRef<YouTubePlayer>(null)

  return (
    <div className='aspect-video relative h-[30rem] pointer-events-none md:h-[34rem] 2xl:h-[45rem]'>
      <ReactPlayer
        config={{
          youtube: {
            playerVars: { showinfo: 0, disablekb: 1, modestbranding: 1 }
          }
        }}
        playing
        controls={false}
        url={`https://www.youtube.com/watch?v=${embedId}`}
        width='100%'
        height='100%'
        volume={0.1}
        loop={true}
        playsinline
        stopOnUnmount={true}
        muted={true}
      />
    </div>
  )
}

FramerYoutube.defaultProps = {
  embedId: ''
}
