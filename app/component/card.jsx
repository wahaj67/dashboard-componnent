import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedStatus,setCurrentPage } from "@/redux/slice";

export default function CardComponent() {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState("request");

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
      title: "Order Request",
      value: 120,
      unit: "/order",
      description: "Total number of requests from Stores",
      status: "in-transit",
    },
    {
      title: "Order In Process",
      value: 1340,
      unit: "/order",
      description: "Number of orders in shipping and packing",
      status: "in-process",
    },
    {
      title: "Order Delivered",
      value: 3543,
      unit: "/delivered",
      description: "Total number of orders delivered",
      status: "completed",
    },
  ];

  return (
    <div className="bg-gray-50 h-[30%] w-[75%]  rounded-3xl mt-2 mx-auto p-4 sm:p-8 ">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto justify-between">
        {orders.map((order) => (
          <div
            key={order.status}
            onClick={() => handleClick(order.status)}
            className={`bg-white shadow-md rounded-lg p-6 cursor-pointer transition-all hover:scale-105 ${
              selectedCard === order.status ? "bg-green-700 text-white " : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{order.title}</h3>
            <p className="text-2xl">{order.value}</p>
            <p>{order.unit}</p>
            <p className="text-sm text-gray-600">{order.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
