import { Package, PackageX, AlertCircle } from "lucide-react";

const inventoryItems = [
  { icon: Package, title: "Low Stock", items: 18, percentage: 0.01 },
  { icon: PackageX, title: "Out Of Stock", items: 9, percentage: 0.01 },
  { icon: AlertCircle, title: "Short Expire", items: 3, percentage: 0.01 },
];

export default function InventoryOverview() {
  return (
    <div className="w-full p-6  ">
      <div className="bg-white   rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Inventory Overview
          </h2>
          <div className="space-y-6">
            {inventoryItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.items.toString().padStart(2, "0")} Items
                    </span>
                  </div>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      All stock items that are {item.title.toLowerCase()}
                    </div>
                    <span className="text-sm text-red-500 flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 transform rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {item.percentage.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
