import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sm:container sm:grid sm:grid-cols-3 sm:py-3 sm:px-2 sm:mb-4 sm:mt-2'>
    {/* <h1 className='sm:font-bold'>Largerthani</h1>
    <ul className='sm:flex sm:justify-between'>
        <li className='sm:hover:font-bold sm:px-1'><Link to=''>Home</Link></li>
        <li className='sm:hover:font-bold sm:px-1'><Link to='about'>About</Link></li>
        <li className='sm:hover:font-bold sm:px-1'><Link to=''>What We Do</Link></li>
        <li className='sm:hover:font-bold sm:px-1'><Link to=''>Media</Link></li>
        <li className='sm:hover:font-bold sm:px-1'><Link to=''>Contact</Link></li>
    </ul>
    <div className='sm:text-end'>
        <Link className='sm:bg-black sm:px-2 sm:py-1 sm:text-white sm:rounded'>Donate</Link>
    </div> */}
    <div className='w-[60%]'>
      <ul className='flex justify-between items-center text-yellow-500 font-bold'>
        <li>home</li>
        <li>text</li>
        <li>text2</li>
        <li>text4</li>
      </ul>
    </div>
 </div>
 
  )
}

export default Header