import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CredentialsSignInForm from './credentials-signin-form'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Login'
}

const SignInPage = async () => {
  const session = await auth() 

  if (session) {
    return redirect('/')
  }

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
            <CredentialsSignInForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}
 
export default SignInPage