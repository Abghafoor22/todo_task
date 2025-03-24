import React, { useContext, useEffect, useState } from 'react'
import Addtodo from '../components/Addtodo'
import Todos from '../components/Todos'
import { AuthContext } from '../contexts/AuthContext'
const Home = () => {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  const [data, setData] = useState([])
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"))
    setData(storedUser)
    // console.log(storedUser)
  }, [])
  console.log("Data", data[0]?.username);




  return (
    <>

      <div className='container mx-auto '>
        <div className='absolute right-8 top-6'>
          <button
          onClick={handleLogout}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
          rounded cursor-pointer'
        >Logout</button>
        </div>
        <h1 className='text-3xl'>Wellcome! {data[0]?.username}</h1>
        <Addtodo />
        <Todos />

      </div>
    </>
  )
}

export default Home