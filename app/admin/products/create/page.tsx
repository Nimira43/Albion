import { requireAdmin } from '@/lib/auth-guard'

const AdminCreateProductPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin Create Product Page</div>
  )
}
 
export default AdminCreateProductPage