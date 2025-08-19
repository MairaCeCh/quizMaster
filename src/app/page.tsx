// import React from 'react'

// export const metadata = {
//   title: 'Quiz Master ',
// };

// const page = () => {
//   return (
//     <div>
   
//     </div>
//   )
// }

// export default page
import React from 'react'
import CardCategory from '@/components/cardCategory/CardCategory'

export const metadata = {
  title: 'Quiz Master ',
};

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardCategory />
    </div>
  )
}

export default page