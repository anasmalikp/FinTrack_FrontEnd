import axios from "axios"
import Cookies from "js-cookie"

export const GetHistory = async() =>{
    try{
        const response = await axios.get("https://moneymgt.onrender.com/api/Transaction",{
            headers:{
                "Authorization":`Bearer ${Cookies.get('token')}`
            }
        })
        
        return response;
    }
    catch(err){
        console.log("error while fetching the History",err)
    }
}