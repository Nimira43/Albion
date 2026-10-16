import { requireAdmin } from '@/lib/auth-guard'
import { auth } from '@/auth'
import { deleteOrder, getAllOrders } from '@/lib/actions/order.actions'
import { Metadata } from 'next'
import Pagination from '@/components/shared/pagination'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { formatId, formatDateTime, formatCurrency } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DeleteDialog from '@/components/shared/delete-dialog'

export const metadata: Metadata = {
  title: 'Admin Orders'
}

const AdminOrdersPage = async (props: {
  searchParams: Promise<{page: string}>
}) => {
  await requireAdmin()
  const { page = '1' } = await props.searchParams
  const session = await auth()

  if (session?.user?.role !== 'admin')
    throw new Error('User is not authorised.')

  const orders = await getAllOrders({
    page: Number(page),
  })
  
  return (  
    <div className='space-y-2'> 
      <h2 className='h2-medium'>
        Orders
      </h2>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                ID
              </TableHead>
              <TableHead>
                Date
              </TableHead>
              <TableHead>
                Total
              </TableHead>
              <TableHead>
                Paid
              </TableHead>
              <TableHead>
                Delivered
              </TableHead>
              <TableHead>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.data.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {formatId(order.id)}
                </TableCell>
                <TableCell>
                  {formatDateTime(order.createdAt).dateTime}
                </TableCell>
                <TableCell>
                  {formatCurrency(order.totalPrice)}
                </TableCell>
                <TableCell>
                  {order.isPaid && order.paidAt
                    ? formatDateTime(order.paidAt).dateTime
                    : 'Not Paid'
                  }
                </TableCell>
                <TableCell>
                  {order.isDelivered && order.deliveredAt
                    ? formatDateTime(order.deliveredAt).dateTime
                    : 'Not Delivered'
                  }
                </TableCell>
                <TableCell>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                  >
                    <Link
                      href={`/order/${order.id}`}
                      className='cursor-pointer hover:text-main transitioning'
                    >
                      Details
                    </Link>
                  </Button>
                  <DeleteDialog
                    id={order.id}
                    action={deleteOrder}
                  /> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {
          orders.totalPages > 1 && (
            <Pagination
              page={Number(page) || 1}
              totalPages={orders?.totalPages}
            />
          )
        }
      </div>
    </div>
  )
}
 
export default AdminOrdersPage