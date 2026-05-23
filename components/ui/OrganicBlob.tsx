import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

const SHAPES: Record<string, string> = {
  a: '42% 58% 63% 37% / 41% 44% 56% 59%',
  b: '63% 37% 41% 59% / 43% 62% 38% 57%',
  c: '38% 62% 56% 44% / 54% 38% 62% 46%',
  d: '50% 50% 33% 67% / 55% 48% 52% 45%',
}

const COLORS: Record<string, string> = {
  champagne: 'rgba(196, 168, 130, 1)',
  rose: 'rgba(232, 213, 203, 1)',
  sauge: 'rgba(181, 196, 177, 1)',
  creme: 'rgba(247, 243, 238, 1)',
}

interface OrganicBlobProps {
  shape?: keyof typeof SHAPES
  color?: keyof typeof COLORS
  opacity?: number
  className?: string
  style?: CSSProperties
}

export function OrganicBlob({ shape = 'a', color = 'champagne', opacity = 0.05, className, style }: OrganicBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute animate-float-soft', className)}
      style={{ borderRadius: SHAPES[shape], background: COLORS[color], opacity, filter: 'blur(40px)', ...style }}
    />
  )
}
