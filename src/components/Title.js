import React from 'react'

const Title = (props) => {
  return (
    <div className='flex items-center font-bold'>
        <div className='h-[2px] bg-black w-[40px] me-3'></div>
        <div>{props.title}</div>
    </div>
  )
}

export default Title