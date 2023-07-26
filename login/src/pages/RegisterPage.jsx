import axios from "axios";
import { useState } from "react";

function RegisterPage(){
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
    const handleSubmit=(e)=>{
        axios.post("http://localhost:3003/addUser", {username,password}).then(result=>console.log(result))
        
    }
    return <div id="RegisterPage">
        <h1>Create Acoount</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    </div>
}

export default RegisterPage;