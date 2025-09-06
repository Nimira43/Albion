import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

const HomePage = () => {
  
  return ( 
    <>
      <ProductList 
        data={sampleData}
        title='Newest Products'
      />
    </>
    
  )
}
 
export default HomePage