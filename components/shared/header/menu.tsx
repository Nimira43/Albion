import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import Link from 'next/link'
import { PiShoppingCart, PiUserCircle } from 'react-icons/pi'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'

const Menu = () => {
  return ( 
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-width-xs gap-1'>
        <ModeToggle />
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <PiShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/sign-in'>
            <PiUserCircle /> Login
          </Link>
        </Button>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <
          </SheetTrigger>
        </Sheet>
      </nav>
    </div>
   )
}
 
export default Menu