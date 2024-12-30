import axios from "axios"

export const Register = async(user)=>{
    try{
        const response = await axios.post("https://moneymgt.onrender.com/api/User/registerusers",user)
        return response
    }
    catch(err){
        console.log(err)
    }
}

export const Login = async(user)=>{
    try{
        const response = await axios.post("https://moneymgt.onrender.com/api/User/loginusers", user)
        return response
    }
    catch(err){
        console.log(err)
    }
}