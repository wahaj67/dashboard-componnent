import React from 'react'

import Overview from './overview'
import InventoryOverview from './inventryoverivew'
import OrderOverview from './card'

// import Tickets from './tickets'

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-100  p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white w-[80%] -mr-4  mx-auto rounded-lg shadow-md sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <OrderOverview />
          </div>
          <div className="bg-white w-[80%] -mr-4 mx-auto rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Order Overview</h2>
            <Overview />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <InventoryOverview />
          </div>
          {/* <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Tickets</h2>
            <Tickets />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Main