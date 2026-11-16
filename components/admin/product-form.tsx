'use client'

import { useToast } from '@/hooks/use-toast'
import { productDefaultValues } from '@/lib/constants'
import { insertProductSchema, updateProductSchema } from '@/lib/validators'
import { Product } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Form } from '../ui/form'

const ProductForm = ({
  type,
  product,
  productId
}: {
  type: 'Create' | 'Update'
  product?: Product
  productId?: string
}) => {
  const router = useRouter()  
  const { toast } = useToast()

  const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver: type === 'Update' ? zodResolver(updateProductSchema) : zodResolver(insertProductSchema),
    defaultValues: product && type === 'Update' ? product : productDefaultValues
  })

  return (  
    <Form {...form}>
      <form className='space-y-8'>
        <div className='flex flex-col md:flex-row gap-5'>
          Name and Slug fields
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          Cateogry and Brand fields
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          Price and Stock fields
        </div>
        <div className='upload-field flex flex-col md:flex-row gap-5'>
          Images field
        </div>
        <div className='upload-field'>
          isFeatured field
        </div>
        <div>
          Description
        </div>
        <div>
          Submit Button
        </div>
      </form>
    </Form>
  )
}
 
export default ProductForm