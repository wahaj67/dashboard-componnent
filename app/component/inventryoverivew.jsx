import { AlertCircle, Package, PackageX } from 'lucide-react'

const inventoryItems = [
  { icon: <Package className="w-6 h-6" />, title: 'Low Stock', items: 18, percentage: 0.01 },
  { icon: <PackageX className="w-6 h-6" />, title: 'Out Of Stock', items: 9, percentage: 0.01 },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Short Expire', items: 3, percentage: 0.01 },
]

export default function InventoryOverview() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Overview</h2>
        <div className="space-y-4">
          {inventoryItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-green-600">{item.icon}</div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                  <span className="text-sm font-semibold text-gray-900">{item.items.toString().padStart(2, '0')} Items</span>
                </div>
                <div className="mt-1 flex justify-between items-center">
                  <div className="text-xs text-gray-500">All stock items that are low stock</div>
                  <span className="text-xs text-red-500 flex items-center">
                    <svg className="w-3 h-3 mr-1 bg-" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  )
}

