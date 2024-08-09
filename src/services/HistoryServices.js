import axios from "axios"
import Cookies from "js-cookie"

export const GetHistory = async() =>{
    try{
        const response = await axios.get("https://localhost:7295/api/Transaction",{
            headers:{
                "Authorization":`Bearer ${Cookies.get('token')}`
            }
        })
        return response.data
    }
    catch(err){
        console.log(err)
    }
}