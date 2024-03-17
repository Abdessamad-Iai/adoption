import React from 'react'
import img3 from '../images/img3.png';


const Banner = () => {
  return (
    <div>
 <div className='sm:py-6 md:py-6'>
   <div className='relative sm:w-[80%] md:w-[80%] mx-auto rounded-xl h-64 flex flex-col items-center justify-center'>
     <div className='absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl' style={{ backgroundImage: `url(${img3})`, filter: 'brightness(50%)', opacity: 0.9 }}></div>
     <p className='sm:text-3xl md:text-3xl text-white z-10 w-[70%] text-center'>You can contribute to provide a place for children with special needs!</p>
     <div className='sm:flex md:flex justify-between w-[50%] items-center z-10'>
       <button className="sm:mt-4 md:mt-4 bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg w-60 z-10 my-1">
         Join as a volunteer
       </button>
       <button className="sm:mt-4 md:mt-4 bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg w-60 z-10">
         Learn more
       </button>
     </div>
   </div>
 </div>
</div>

  )
}

export default Banner