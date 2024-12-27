import axios from "axios"
import Cookies from "js-cookie"

export const GetHistory = async() =>{
    try{
        const response = await axios.get("https://moneymgt.onrender.com/api/Transaction",{
            headers:{
                "Authorization":`Bearer ${Cookies.get('token')}`
            }
        })
        console.log(response.data);
        
        return response.data.sort((a, b) => new Date(b.transactionTime) - new Date(a.transactionTime));
    }
    catch(err){
        console.log(err)
    }
}