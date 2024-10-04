import Image from "next/image";

const inventoryItems = [
  { icon: "/Group 33619.png", title: "Low Stock", items: 18, percentage: 0.01 },
  {
    icon: "/Group 33619 (1).png",
    title: "Out Of Stock",
    items: 9,
    percentage: 0.01,
  },
  {
    icon: "/Group 33619 (2).png",
    title: "Short Expire",
    items: 3,
    percentage: 0.01,
  },
];

export default function InventoryOverview() {
  return (
    <div className="w-78  p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Inventory Overview
          </h2>
          <div className="space-y-6">
            {inventoryItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
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
