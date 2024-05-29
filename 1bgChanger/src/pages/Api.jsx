import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


function Api() {
    const [records , setRecords]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(Response => Response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='w-full h-screen dark:bg-black bg-[#e6e6fa] '>

        {/* <ul>
        {records.map((list, index)=>(
            <ul key={index}>
                <li>{list.name}</li>
            </ul>
        ))}
        </ul> */}



        <div className='flex flex-wrap pt-12'>
            {
                records.map((data , index)=>(
                    <div className='w-2/5  bg-[#9333ea] m-4 p-3 rounded' key={index}>
                        <h1 className='flex justify-center text-xl text-white dark:text-black '>ID: {data.id} Name: {data.name}</h1>
                        <h1 className='flex justify-center text-white dark:text-black '>Email: {data.email}</h1>
                    </div>
                ))
            }
        </div>

        {/* <div className='w-fit  bg-[#9333ea] m-4 p-3 rounded'>
            <h1>hello card</h1>
            <h1 className='flex justify-center text-xl text-white dark:text-black '>ID: {data.id} Name: {data.name}</h1>
            <h1 className='flex justify-center text-white dark:text-black '>Email: {data.email}</h1>
        </div> */}
        
    </div>
  )
}

export default Api