import React, { useEffect } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { fetching, setCurrentPage } from "@/redux/slice";

export default function OrderOverview() {
  const dispatch = useDispatch();
  const {
    userData: orders,
    loading,
    error,
    currentPage,
    totalOrders,
    ordersPerPage,
    selectedStatus,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      fetching({
        page: currentPage,
        limit: ordersPerPage,
        status: selectedStatus,
      })
    );
  }, [dispatch, currentPage, ordersPerPage, selectedStatus]);

  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg   w-[65%] mt-10 shadow">
      <div className="overflow-x-auto">
        {loading &&  
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>}
        {/* {error && <div>{error}</div>} */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              {/* <TableHead>Store Name</TableHead> */}
              <TableHead>Shipping Cost</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders && orders.length > 1 ? (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="">{order.id}</TableCell>
                  <TableCell>{order.created_at}</TableCell>
                  {/* <TableCell>{order.store_name}</TableCell> */}
                  <TableCell>{order.shipping_cost}</TableCell>
                  <TableCell>{order.order_status}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="6">No orders found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-[#33dd] hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-[#33dd]  hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
