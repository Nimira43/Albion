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

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) => {
  const { callbackUrl } = await props.searchParams
  const session = await auth() 

  if (session) {
    return redirect(callbackUrl || '/')
  }

  return ( 
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-2'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo1.png' 
              alt={`${APP_NAME} logo`}
              width={50}
              height={50}
              priority={true}
            />
          </Link>
          <CardTitle className='text-center'>
            Login
          </CardTitle>
          <CardDescription className='text-center'>
            Login to your account
          </CardDescription>  
        </CardHeader>
        <CardContent className='space-y-4'>
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  )
}
 
export default SignInPage