import { requireAdmin } from '@/lib/auth-guard'

const AdminUserPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin User Page</div>
  )
}
 
export default AdminUserPage