import React from 'react'

const Events = () => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <div className='text-2xl mb-4'>Our Events</div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='bg-yellow-500 grid grid-cols-3 rounded-lg px-2 py-5'>
                <div className='text-xl flex items-start justify-center'>
                    <span className='font-bold text-2xl'>13</span> <br></br>
                    APR
                </div>
                <div className='text-xl'>
                    <div >NEXT EVENTS <div className='inline h-[3px] w-[20px] border-t border-black'></div></div>
                    <p className='font-bold'>A day with a wonderful children</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path d="M18.4571 8.70711C18.8476 8.31658 18.8476 7.68342 18.4571 7.29289L12.0931 0.928933C11.7026 0.538409 11.0695 0.538409 10.6789 0.928933C10.2884 1.31946 10.2884 1.95262 10.6789 2.34315L16.3358 8L10.6789 13.6569C10.2884 14.0474 10.2884 14.6805 10.6789 15.0711C11.0695 15.4616 11.7026 15.4616 12.0931 15.0711L18.4571 8.70711ZM0.25 9L17.75 9L17.75 7L0.25 7L0.25 9Z" fill="#1D2130"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='bg-yellow-500 grid grid-cols-3 rounded-lg px-2 py-5'>
                <div className='text-xl flex items-start justify-center'>
                    <span className='font-bold text-2xl'>13</span> <br></br>
                    APR
                </div>
                <div className='text-xl'>
                    <div >NEXT EVENTS <div className='inline h-[3px] w-[20px] border-t border-black'></div></div>
                    <p className='font-bold'>A day with a wonderful children</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path d="M18.4571 8.70711C18.8476 8.31658 18.8476 7.68342 18.4571 7.29289L12.0931 0.928933C11.7026 0.538409 11.0695 0.538409 10.6789 0.928933C10.2884 1.31946 10.2884 1.95262 10.6789 2.34315L16.3358 8L10.6789 13.6569C10.2884 14.0474 10.2884 14.6805 10.6789 15.0711C11.0695 15.4616 11.7026 15.4616 12.0931 15.0711L18.4571 8.70711ZM0.25 9L17.75 9L17.75 7L0.25 7L0.25 9Z" fill="#1D2130"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events