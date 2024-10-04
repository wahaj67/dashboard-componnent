import Image from 'next/image'
import { Bell, Search } from 'lucide-react'

export default function NavbarComponent() {
  return (
    <nav className="w-full flex items-center overflow-x-hidden justify-between p-4 bg-white">
      <div className="relative flex-grow max-w-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for news and funds..."
          required
        />
      </div>
      <div className="flex items-center space-x-4 ml-4">
        <div className="relative">
          <Bell className="w-7 h-7 bg-green-600 shadow-md rounded-full text-white" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3  rounded-full">
            <span className="sr-only">Notifications</span>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/elips.png"
            alt="Profile picture"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
            Rayford Chenail
          </span>
        </div>
      </div>
    </nav>
  )
}