"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Ticket,
  Users,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  {
    icon: ShoppingCart,
    label: "Order",
    href: "/order",
    subItems: [
      { label: "New Order", href: "/order/new" },
      { label: "Order History", href: "/order/history" },
    ],
  },
  { icon: Ticket, label: "Tickets", href: "/tickets" },
  { icon: Users, label: "Employees", href: "/employees" },
];

export default function SideBar() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleExpand = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed  left-2 z-50 p-2 bg-white rounded-md mt-2  h-10 w-10 lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-52 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-auto`}
      >
        <div className="flex flex-col min-h-screen">
          <div className="p-4 border-b border-gray-200 bg-gray-50 shadow-lg mt-2 hover:scale-105">
            <Image src="/logo animate.png" alt="Logo" width={178} height={38} />
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              {menuItems.map((item) => (
                <li key={item.label} className="px-4 py-4 shadow-lg mt-10 ">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex items-center w-full text-gray-700 hover:text-green-600 transition-colors duration-200"
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.label}
                        {expandedItem === item.label ? (
                          <ChevronUp className="w-4 h-4 ml-auto" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                      {expandedItem === item.label && (
                        <ul className="ml-6 mt-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.label} className="py-1">
                              <Link
                                href={subItem.href}
                                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                                onClick={() => setIsSidebarOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
