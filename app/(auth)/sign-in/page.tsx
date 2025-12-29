import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
              priority={true}
            />
          </Link>
          <CardTitle className='text-center'>
            Login
          </CardTitle>
          <CardDescription className='text-center'>
            Login to your account
          </CardDescription>
          <CardContent className='space-y-4'>
            Form goes here
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}
 
export default SignIn