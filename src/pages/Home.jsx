import React, { useEffect, useState } from 'react'
import Addtodo from '../components/Addtodo'
import Todos from '../components/Todos'
const Home = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"))
    setData(storedUser)
    // console.log(storedUser)
  }, [])
  console.log("Data" , data[0]?.username);
  
  
  return (
    <>

   <div>
    <h1 className='text-3xl'>Wellcome! {data[0]?.username}</h1>
   <Addtodo/>
   <Todos/>
   </div>
    </>
  )
}

export default Home