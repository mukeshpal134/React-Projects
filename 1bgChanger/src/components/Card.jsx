import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Card() {

    const data = useLoaderData()
  return (
    <div className='w-fit  bg-[#9333ea] m-4 p-3 rounded'>
          <h1 className='flex justify-center text-xl text-white dark:text-black '>ID: {data.id} Name: {data.name}</h1>
          <h1 className='flex justify-center text-white dark:text-black '>Email: {data.email}</h1>
          
        </div>
  )
}

export default Card