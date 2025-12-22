import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center py-20'>
        <div className='text-center'>
      <h1 className='text-5xl '>404</h1>
      <h3 className='text-3xl'>Page Not Found</h3>
      <NavLink className= "text-2xl text-blue-400" to={"/"}>Go back home</NavLink>
      </div>
    </div>
  )
}

export default PageNotFound
