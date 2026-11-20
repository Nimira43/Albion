'use client'

import { useToast } from '@/hooks/use-toast'
import { productDefaultValues } from '@/lib/constants'
import { insertProductSchema, updateProductSchema } from '@/lib/validators'
import { Product } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm, ControllerRenderProps } from 'react-hook-form';
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import slugify from 'slugify'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

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
          <FormField
            control={form.control}
            name='name'
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'name'> }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='slug'
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof insertProductSchema>, 'slug'> }) => (
              <FormItem className='w-full'>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input placeholder='Enter product slug' {...field} />
                    <Button
                      type='button'
                      className='bg-primary px-4 py-1 mt-2'
                      onClick={() => {
                        form.setValue('slug', slugify(form.getValues('name'), { lower: true}))
                      }}
                    >
                      Generate
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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