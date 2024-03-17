import React from 'react';

function Card(props) {
 return (
    <div className='relative flex flex-col items-center px-5 justify-center h-80 w-64 rounded-xl shadow-lg mt-6'>
     <div className='absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl' style={{ backgroundImage: `url(${props.image})`, filter: 'brightness(50%)', opacity: 0.9 }}></div>
     <h2 className="text-2xl font-bold mt-4 z-10 text-white">{props.title}</h2>
     <p className="text-lg text- mt-2 z-10 text-white">{props.text}</p>
     <button className="mt-4 bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg z-10">
       Learn more
     </button>
    </div>

 );
}

export default Card;