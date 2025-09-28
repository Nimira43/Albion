import { getProductBySlug } from '@/lib/actions/product.actions'
import { notFound } from 'next/navigation'

// const ProductDetailsPage = async (props: {
//   params: Promise<{ slug: string }>
// }) => {
//   const { slug } = await props.params
//   const product = await getProductBySlug(slug)

//   if (!product) notFound()
    
//   return ( 
//     <>{ product.name }</>
//    )
// }

const ProductDetailsPage = async ({
  params
}: {
  params: { slug: string }
}) => {
  const product = await getProductBySlug(params.slug)

  if (!product) notFound()

  return <>{product.name}</>
}

 
export default ProductDetailsPage