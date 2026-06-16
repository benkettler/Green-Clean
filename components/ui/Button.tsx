import { cn } from '@/components/ui/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
          {
            'text-small px-4 py-2': size === 'sm',
            'text-body px-6 py-3':  size === 'md',
            'text-body-lg px-8 py-4': size === 'lg',
          },
          {
            'bg-green-800 text-white hover:bg-green-900 shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'primary',
            'border-2 border-green-800 text-green-800 hover:bg-green-50 active:bg-green-100':
              variant === 'secondary',
            'text-charcoal hover:bg-green-50 hover:text-green-800 active:bg-green-100':
              variant === 'ghost',
            'bg-white text-green-800 hover:bg-green-50 shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'white',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
