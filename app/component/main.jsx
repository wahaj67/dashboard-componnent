import React from 'react'
import CardComponent from './card'
import OrderOverview from './overview'

const Main = () => {
  return (
    <div className='  bg-gray-100 w-[88%] mx-auto rounded-lg mt-2  h-screen'>
        <CardComponent/>
        <OrderOverview/>
    </div>
  )
}

export default Main