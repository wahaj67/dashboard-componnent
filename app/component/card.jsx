import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedStatus, setCurrentPage } from "@/redux/slice";
import { Info } from "lucide-react";

export default function OrderOverview() {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState("in-transit");

  useEffect(() => {
    console.log("useEffect triggered, calling dispatch with:", selectedCard);
  }, [selectedCard]);

  const handleClick = (cardStatus) => {
    console.log("Clicked card status:", cardStatus);
    setSelectedCard(cardStatus);
    dispatch(setSelectedStatus(cardStatus));
    dispatch(setCurrentPage(1));
  };

  const orders = [
    {
      title: "Order Requests",
      value: 146,
      unit: "Orders",
      description: "Total no. of request from Stores",
      status: "in-transit",
    },
    {
      title: "Order In Process",
      value: 198,
      unit: "Orders",
      description: "No. of order are in ship and pack",
      status: "in-process",
    },
    {
      title: "Order Delivered",
      value: 649,
      unit: "Delivered",
      description: "Total no. of order delivered",
      status: "completed",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {orders.map((order) => (
          <div
            key={order.status}
            onClick={() => handleClick(order.status)}
            className={`rounded-lg p-4 cursor-pointer transition-all  dark:bg-gray-900 ${
              selectedCard === order.status
                ? "bg-[#13834B] dark:bg-[#13834b] text-white"
                : "bg-white border  border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{order.title}</h3>
              <Info
                className={`w-5 h-5 ${
                  selectedCard === order.status ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <p className="text-3xl font-bold mb-1">
              {order.value}
              <span className="text-xs font-normal mr-2">{order.unit}</span>
            </p>
            <p
              className={`text-sm ${
                selectedCard === order.status ? "text-white" : "text-gray-500"
              }`}
            >
              {order.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
