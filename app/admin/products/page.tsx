import { requireAdmin } from '@/lib/auth-guard'

const AdminProductsPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin Products Page</div>
  )
}
 
export default AdminProductsPage