import { requireAdmin } from '@/lib/auth-guard'

const AdminProductPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin Product Page</div>
  )
}
 
export default AdminProductPage