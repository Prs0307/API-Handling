import express from 'express';
import cors from "cors";
import { saltSuggestions } from './db';
const app = express();

app.use(cors())
app.get('/api/products', (req, res) => {

  
  
    //create sample api which have array of products
  
    //http://localhost:3000/api/products?search=Paracetamol
    if(req.query.search){
        const filterProduct = saltSuggestions.filter(product => 
            product.salt.includes(req.query.search)
        );
    // medicineSuggestions 
    
        res.send(filterProduct);
        return ; //important
    }
    // else {
    //     // Handle case where search query is not provided
    //     res.status(400).send("Search query is required");
    // }
    
    //to simmulate the api 2s
    const timeout=2000
    setTimeout(() => {
        res.json({"data":saltSuggestions})
    }, timeout);
})



const port=process.env.PORT || 3000;

app.listen(port,()  => {
    console.log(`listening on port ${port}`);
});
