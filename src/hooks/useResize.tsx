import React, { useState, useEffect } from 'react'

const useResize = (myRef: React.RefObject<any>) => {
  const [width, setWidth] = useState<any>(0)
  const [height, setHeight] = useState<any>(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(myRef && myRef.current.offsetWidth)
      setHeight(myRef && myRef.current.offsetHeight)
    }
    
    if (myRef.current) {
      handleResize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef])

  return { width, height }
}

export { useResize }
