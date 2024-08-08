import axios from "axios"
import Cookies from "js-cookie"

export const AddTransaction = async(val)=>{
    try{
        const response = await axios.post(`https://localhost:7295/api/Transaction?amount=${val.amt}&accountid=${val.acid}`,{},{
            headers:{
                "Authorization":`Bearer ${Cookies.get('token')}`
            }
        })
        return response.status
    }
    catch(err){
        console.log(err)
    }
}