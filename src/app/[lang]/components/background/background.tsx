"use client"
import { usePathname } from "next/navigation";
import { useMediaQuery } from "../../_hooks/useMediaQuery";
const Background = () => {
    const isSM = useMediaQuery(640)
    const currentRoute = usePathname();
  return (
    isSM ?       <></> :
    currentRoute.includes('products') ?<></>:
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