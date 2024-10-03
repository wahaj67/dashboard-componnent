import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedStatus, setCurrentPage } from "@/redux/slice";
import Overview from "./overview";

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
      unit: "Total",
      description: "Total no of request from Stores",
      status: "in-transit",
    },
    {
      title: "Order In Process",
      value: 198,
      unit: "Order",
      description: "No. of order are in ship and pack",
      status: "in-process",
    },
    {
      title: "Order Delivered",
      value: 649,
      unit: "Delivered",
      description: "Total no of order delivered",
      status: "completed",
    },
  ];

  return (
    <div className="bg-white   h-[250px] w-[75%]  mx-auto  overflow-x-hidden p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {orders.map((order) => (
          <div
            key={order.status}
            onClick={() => handleClick(order.status)}
            className={`bg-white border rounded-lg p-4 cursor-pointer transition-all hover:scale-105 ${
              selectedCard === order.status ? "bg-green-500" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3
                className={`text-sm font-medium text-gray-500 ${
                  selectedCard === order.status ? "text-white" : ""
                }`}
              >
                {order.title}
              </h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800  `}
              >
                {order.unit}
              </span>
            </div>
            <p
              className={`text-2xl font-bold mb-1 ${
                selectedCard === order.status ? "text-white" : ""
              }`}
            >
              {order.value}
            </p>
            <p
              className={`text-xs text-gray-500 ${
                selectedCard === order.status ? "text-white" : ""
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
