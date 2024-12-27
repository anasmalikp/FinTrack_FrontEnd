import axios from "axios"
import Cookies from "js-cookie"

export const AddTransaction = async(val, isBank)=>{
    try{
        let date = new Date().toISOString();
        val = {...val, transactionTime:date}
        console.log(val)
        console.log(`https://moneymgt.onrender.com/api/Transaction?isBank=${isBank}`)
        const response = await axios.post(`https://moneymgt.onrender.com/api/Transaction?isBank=${isBank}`,val,{
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