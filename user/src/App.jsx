
import { useState } from 'react'
import { useEffect } from 'react'

import { apiCalls } from './services/api'

function App() {
  // const [products,setproducts]=useState([])
  const[loading,setLoading]=useState(false)
  const [error,seterror]=useState(false)

 

  useEffect(()=>{
   apiCalls.fetchData().then((data)=>{
    console.log(data?.data?.saltSuggestions)
    setproducts(data?.data?.saltSuggestions)
   }).catch((error)=>{console.log(error);})
  },[])

  if(error) {
    seterror(true)
    console.log('something went wrong....');
    return <h1>error occurred :  ...</h1>


  }
  if(loading){
    setLoading(true)  
    return <h1>loading ...</h1>
  }
  

  return (
    <>
    
    {/* <h1>
      API Call in  react 
    </h1>
    { products.length && products && products.map((p)=>{
      return <p>{p.salt}</p>
    })}
     */}
    </>
   
  )
}

export default App
