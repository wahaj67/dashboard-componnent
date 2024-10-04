import React, { useEffect } from "react";
import { Edit2, Search, SearchCheckIcon, SearchCode, Trash2 } from "lucide-react";
import { Button, Input } from "@/components/ui/button";
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


export default function Overview() {
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
    <div className="container mx-auto p-4 bg-white rounded-xl shadow-lg  w-full max-w-7xl mt-10">
      <div className="overflow-x-auto">
        {loading && (
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        )}

        <div className="min-h-[300px] md:min-h-[300px] lg:min-h-[400px]">
          <div>
          <h1 className="text-2xl sm:text-xl font-bold mt-2 ">Order Overview </h1>
          
          
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/5">Order ID</TableHead>
                <TableHead className="w-1/5">Date</TableHead>
                <TableHead className="w-1/5">Shipping Cost</TableHead>
                <TableHead className="w-1/5">Status</TableHead>
                <TableHead className="w-1/5 ">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders && orders.length > 1 ? (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="text-sm font-extralight">
                      {order.order_number}
                    </TableCell>
                    <TableCell className="text-sm">
                      {order.created_at}
                    </TableCell>
                    <TableCell className="text-sm ">
                      {order.shipping_cost}
                    </TableCell>
                    <TableCell className="text-sm ">
                      {order.order_status}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="">
                        <Edit2 className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10">
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
