
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

function ApiCall() {
    const data = useLoaderData()
    // const [apiData, setApiData]= useState()

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users/1/')
    //     .then(Response => Response.json())
    //     .then(data =>{
    //       console.log(data);
    //       setApiData(apidata)})
    // },[])



  return (
    <div className='w-full h-screen bg-[#e6e6fa] dark:bg-black'>
        <h1 className='flex justify-center pt-12 dark:text-white text-xl'>ApiCall </h1>
        <Card />
        <Card />

        <Card />
        <Card />

        <div>
      {console.log(data)}
    </div>
        
    </div>
  )
}

export default ApiCall

export const apiData = async ()=>{
  const Response = await fetch('https://jsonplaceholder.typicode.com/users/10/')
  return  Response.json()
}