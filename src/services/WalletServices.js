import axios from "axios"
import Cookies from "js-cookie";

export const GetWallet = async()=>{
    try{
        const response = await axios.get("https://moneymgt.onrender.com/api/Transaction/get_balances",{
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