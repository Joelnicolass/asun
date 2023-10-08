"use client"
import { useMediaQuery } from "../../_hooks/useMediaQuery"
const Background = () => {
    const isSM = useMediaQuery(640)
  return (
    isSM ?       <></> :
    <video
    autoPlay
    loop
    muted
    style={{
      objectFit: 'cover',
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      zIndex: -1,
    }}
  >
    <source src='/video.mp4' type='video/mp4' />
  </video>
  )
}

export default Background