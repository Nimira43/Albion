'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/types'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { addItemToCart } from '@/lib/actions/cart.action'

const AddToCart = ({ item }: {item: CartItem }) => {
  const router = useRouter()
  const { toast } = useToast()
  
  const handleAddToCart = async () => {
    const res = await addItemToCart(item)

    if (!res.success) {
      toast({
        variant: 'destructive',
        description: res.message
      })
      return
    }

    toast({
      description: `${item.name} add to cart.`,
      action: (
        <ToastAction 
          className='bg-primary text-light hover:bg-dark'
          altText='Go To Cart'
          onClick={() => router.push('/cart')}
        >
          Go To Cart
        </ToastAction>    
      )
    })
  }

  return (  
    <Button
      className='w-full'
      type='button'
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  )
}
 
export default AddToCart