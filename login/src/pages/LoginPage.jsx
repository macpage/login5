import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function LoginPage(){
    const [users,setUsers] = useState([])
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
   
       const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3003/login",{username,password}).then(result=> {console.log(result)
        if(result.data === "login!!!"){
            navigate("/RegisterPage");
        }
    })
     
        
    } 
    
    
    return <div id="LoginPage">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" />
            <label htmlFor="password">password</label>
            <input type="password"/>
            <button type="submit">login</button>
        </form>
    </div>
}

export default LoginPage;