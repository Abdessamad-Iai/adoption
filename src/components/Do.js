import React from 'react'


const Do = (props) => {
  return (
    <div className='flex justify-between flex-start'>
        <div>
          <div dangerouslySetInnerHTML={{ __html: props.icon }} />
        </div>
        <div className='w-[90%]'>
            <p className='text-2xl font-bold'>{props.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        </div>
    </div>
  )
}

export default Do