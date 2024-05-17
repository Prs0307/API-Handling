import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [products,setproducts]=useState([])
  useEffect(()=>{
    // eslint-disable-next-line no-extra-semi
    ;(async()=>{
      const response = await axios.get('/api/products')
      console.log(' data :'+response.data)
    })()
  },[])
  

  return (
    <>
    <h1>
      API CALL react 
    </h1>
    <h2>No of products : {products.length}</h2>
    </>
   
  )
}

export default App
