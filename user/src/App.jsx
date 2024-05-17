import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  const [products,setproducts]=useState([])
  const[loading,setLoading]=useState(false)
  const [error,seterror]=useState(false)
  useEffect(()=>{
    // eslint-disable-next-line no-extra-semi
    ;(async()=>{
      try {
        setLoading(true)
        seterror(false)
        const response = await axios.get('/api/products')
        console.log(' data :'+response.data)
        setproducts(response.data)
        setLoading(false)
      } catch (error) {
        seterror(true)
        setLoading(false)
      }
    })()
  },[])

  if(error) {
    console.log('something went wrong....');
    // return <h1>error occurred :  ...</h1>


  }
  // if(loading){
  //   return <h1>loading ...</h1>
  // }
  

  return (
    <>
    <h1>
      API Call in  react 
    </h1>
    <h2>No of products : {products.length}</h2>
    </>
   
  )
}

export default App
