import { Card, CardHeader } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login'
}

const SignIn = () => {
  return ( 
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo1.png' 
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
            />
          
          </Link>
        </CardHeader>
      </Card>
    </div>
  )
}
 
export default SignIn