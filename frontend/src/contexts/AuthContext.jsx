import axios, { HttpStatusCode } from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Children } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext({});


const client = axios.create({
    baseURL:"localhost:8000/api/v1/users"
})



export const AuthProvider = ({Children}) => {
    const authContext = useContext(AuthContext);


    cosnt [userData , setUserData] = useState(authContext );



    const router = useNavigate();


    const handleRegister = async (name , username ,password) =>{
        try{
            let request = await client.post("/register",{
                name: name,
                username: username,
                password: password
            })
            if(request.status === httpsStatus.CREATED){
                return request.data.message;
            }
        }catch(err){
            throw(err);
        }
    }


    const data = {
        userData,setUserData,
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )


}