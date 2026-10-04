import { requireAdmin } from '@/lib/auth-guard'

const AdminUsersPage = async () => {
  await requireAdmin()
  return (  
    <div>Admin Users Page</div>
  )
}
 
export default AdminUsersPage