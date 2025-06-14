'use client'

import { useBreakpoint } from '@/hooks'
import { Calculator } from 'lucide-react'

export default function Home() {
  const { isMobile } = useBreakpoint()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Calculator size={isMobile ? 50 : 75} />
      <h1 className="text-center">Welcome to Therapay</h1>
      <p className="text-center">
        The easiest way for therapists to calculate payroll and manage client billing.
      </p>
    </div>
  )
}
