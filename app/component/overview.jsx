import React, { useEffect } from "react";
import {
  ChevronDown,
  Download,
  Edit2,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
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

export default function Overview() {
  const dispatch = useDispatch();
  const {
    userData: orders,
    loading,
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
    <div className="container p-4 sm:p-6 bg-white dark:bg-background rounded-xl shadow-sm w-full xl:max-w-full mt-4 sm:mt-10">
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h1 className="text-md  font-bold">Order Overview</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-white">By Store name</span>
              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-white">Compare to</span>
              <input
                type="date"
                className="text-sm text-gray-500 dark:text-white border rounded px-2 py-1"
              />
            </div>
            <Button
              variant="outline"
              className="bg-[#13834B] dark:bg-white dark:text-black text-white hover:bg-green-700 w-full sm:w-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative  w-full sm:w-64">
            <input
              type="search"
              placeholder="Order ID / Name"
              className="pl-14 pr-4 py-2 border dark:text-white  rounded-lg shadow-sm w-52"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 dark:text-white text-gray-400" />
          </div>
          <Button className="bg-[#13834B] text-white dark:text-black dark:bg-white hover:bg-green-700 w-full sm:w-auto">
            Search
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#13834B] animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-[#13834B] animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-[#13834B] animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-2 sm:px-4 dark:text-white">Order ID</TableHead>
                  <TableHead className="px-2 sm:px-4 dark:text-white">Date</TableHead>
                  <TableHead className="px-2 sm:px-4 dark:text-white">Store Name</TableHead>
                  <TableHead className="px-2 sm:px-4 dark:text-white">Region</TableHead>
                  <TableHead className="px-2 sm:px-4 dark:text-white">Status</TableHead>
                  <TableHead className="px-2 sm:px-4 text-right">
                    <Settings className="h-5 w-5 text-gray-500 dark:text-white inline-block" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders && orders.length > 0 ? (
                  orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="px-2 sm:px-4 font-medium">
                        {order.order_number}
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        {order.created_at}
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        {order.store_name || "Jackson Place"}
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        {order.region || "North America"}
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold
                          ${
                            order.order_status === "Packed"
                              ? "bg-blue-100 text-blue-800"
                              : order.order_status === "New Order"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 dark:bg-white text-yellow-800 dark:text-yellow-800"
                          }`}
                        >
                          {order.order_status}
                        </span>
                      </TableCell>
                      <TableCell className="px-2 sm:px-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 dark:text-white">
                      No orders found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-600 dark:text-black dark:bg-white hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 w-full sm:w-auto"
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-600 hover:bg-blue-700 dark:text-black dark:bg-white text-white px-4 py-2 rounded-lg disabled:opacity-50 w-full sm:w-auto"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
