import axios from "axios"
import Cookies from "js-cookie"

export const AddaAccount = async(ac)=>{
    try{
        const response = await axios.post("https://localhost:7295/api/Account",ac,{
            headers:{
                "Authorization": `Bearer ${Cookies.get('token')}`
            }
        })
        return response.status
    }
    catch(err){
        console.log(err)
    }
}

export const GetExp = async()=>{
    try{
        const response = await axios.get("https://localhost:7295/api/Account?catId=1",{
            headers:{
                "Authorization":`Bearer ${Cookies.get('token')}`
            }
        })
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export const GetIncs = async()=>{
    try{
        const response = await axios.get("https://localhost:7295/api/Account?catId=2",{
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