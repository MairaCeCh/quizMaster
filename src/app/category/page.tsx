import React from 'react'
import Link from 'next/link'
import CardCategory from '@/components/cardCategory/CardCategory'

const page = () => {

  return (
<div className="flex justify-center items-center ml-[80px]">
  <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6">

    <CardCategory></CardCategory>

  </div>
</div>

  )
}

export default page
