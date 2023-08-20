import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'inline-flex items-center justify-center rounded-md text-sm font-medium shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      xs: 'h-6 rounded px-2 text-xs',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, size, className })} />
}
