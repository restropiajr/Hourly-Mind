'use client'
import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { cm } from '@/utils'

type HeaderProps = {
  //
}

export const Header: FC<HeaderProps> = () => {
  const [navBG, setNavBG] = useState<string>('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      setNavBG(window.scrollY >= 50 ? 'bg-[#f6e7cb]/60' : 'bg-transparent')
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cm(
        'fixed top-0 left-0 z-10 flex h-[80px] w-full items-center justify-center transition duration-500 ease-in-out',
        navBG
      )}
    >
      <div className="flex w-2/3 items-center justify-between gap-4">
        <Link href="/">Home</Link>
        <div className="flex items-center justify-center gap-4">
          <Link href="/client-calculator">Client Calculator</Link>
          <Link href="/payroll-calculator">Payroll Calculator</Link>
        </div>
      </div>
    </nav>
  )
}
