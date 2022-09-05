import axios from "axios";


export const fetchtProducts =  axios.get("http://localhost:5000/").then((response)=>{
   return (response.data);
    
}).catch((error)=>{
    return (error);
})
