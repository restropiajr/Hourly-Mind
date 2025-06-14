'use client'

import Image from 'next/image'
import { useBreakpoint } from '@/hooks'

export default function Home() {
  const { isMobile } = useBreakpoint()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Therapay Logo"
        width={isMobile ? 100 : 150}
        height={isMobile ? 100 : 150}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center">Welcome to Therapay</h1>
        <h4 className="text-center">
          The easiest way for therapists to calculate payroll and manage client billing.
        </h4>
        <p className="text-center">
          Select the Client Calculator or the Payroll Calculator to get started.
        </p>
      </div>
    </div>
  )
}
