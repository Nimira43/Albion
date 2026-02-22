import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignUpForm from './sign-up-form'

export const metadata: Metadata = {
  title: 'Register'
}

const SignUpPage = async (props: {
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
            Register
          </CardTitle>
          <CardDescription className='text-center'>
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
 
export default SignUpPage