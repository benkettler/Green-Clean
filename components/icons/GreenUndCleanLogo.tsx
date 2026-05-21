import Image from 'next/image'
import { cn } from '@/components/ui/cn'

interface LogoProps {
  className?: string
  light?: boolean
}

export default function GreenUndCleanLogo({ className, light = false }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(light && 'bg-white rounded-xl p-2')}>
        <Image
          src="/images/logo-original.png"
          alt="Green & Clean"
          width={52}
          height={52}
          className="h-12 w-auto"
          priority
        />
      </div>
    </div>
  )
}
