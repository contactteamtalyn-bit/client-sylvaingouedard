import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        encre: 'bg-encre text-creme hover:bg-champagne hover:text-encre',
        champagne: 'bg-champagne text-encre hover:bg-encre hover:text-creme',
        creme: 'bg-creme text-encre hover:bg-rose',
        outline: 'border border-champagne text-champagne hover:bg-champagne hover:text-encre',
        ghost: 'text-champagne hover:text-encre',
      },
      size: {
        default: 'px-9 py-4 text-[14px] tracking-[0.06em]',
        lg: 'px-12 py-[18px] text-[15px] tracking-[0.06em]',
        sm: 'px-5 py-2.5 text-[12px] tracking-[0.06em]',
      },
    },
    defaultVariants: { variant: 'encre', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
