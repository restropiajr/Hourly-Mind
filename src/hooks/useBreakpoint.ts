'use client'

import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return {
    isMobile: width !== undefined && width < 768,
    isTablet: width !== undefined && width >= 768 && width < 1024,
    isDesktop: width !== undefined && width >= 1024,
    width,
  }
}
