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
          'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-200 min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
          {
            'bg-green-500 text-white hover:bg-green-600 shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'primary',
            'border-2 border-green-500 text-green-500 hover:bg-green-50 active:bg-green-100':
              variant === 'secondary',
            'text-charcoal hover:bg-green-50 hover:text-green-500 active:bg-green-100':
              variant === 'ghost',
            'bg-white text-green-500 hover:bg-green-50 shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
              variant === 'white',
          },
          {
            'text-small px-4 py-2': size === 'sm',
            'text-body px-6 py-3':  size === 'md',
            'text-body-lg px-8 py-4': size === 'lg',
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
