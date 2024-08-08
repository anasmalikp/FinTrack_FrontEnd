import axios from "axios"

export const Register = async(user)=>{
    try{
        const response = await axios.post("https://localhost:7295/api/User",user)
        return response.status
    }
    catch(err){
        console.log(err)
    }
}

export const Login = async(user)=>{
    try{
        const response = await axios.post("https://localhost:7295/api/User/login", user)
        return response.data
    }
    catch(err){
        console.log(err)
    }
}