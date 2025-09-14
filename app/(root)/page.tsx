import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'

const HomePage = () => {
  
  return ( 
    <>
      <ProductList 
        data={sampleData.products}
        title='Newest Products'
        limit={4}
      />
    </>
    
  )
}
 
export default HomePage