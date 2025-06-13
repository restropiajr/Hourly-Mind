import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cm = class merge (clsx + tailwind-merge)
export const cm = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs))
}
