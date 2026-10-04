import { requireAdmin } from '@/lib/auth-guard'

const AdminOrdersPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin Orders Page</div>
  )
}
 
export default AdminOrdersPage