import axios from "axios";


export const apiCalls ={
     fetchData: async()=>{
        try {
          const response = await axios.get('http://localhost:3000/api/products')
          return response.data
        } catch (error) {
            console.log(error);
         throw ("something went wrong ")
        }
      }
}