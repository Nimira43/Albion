'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return ( 
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image 
        src='/images/logo1.png'
        width={48}
        height={48}
        alt={`${APP_NAME}`}
      
      />
    </div>
   )
}
 
export default NotFoundPage