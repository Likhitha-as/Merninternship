import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

const navigate = useNavigate();


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


function handleLogin(e){

e.preventDefault();


if(email === "" || password === ""){

alert("Please enter email and password");

return;

}


alert("Login Successful");


navigate("/skills");


}


return(

<div>

<h1>Login</h1>


<form onSubmit={handleLogin}>


<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<br/><br/>


<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>


<br/><br/>


<button type="submit">

Login

</button>


</form>


</div>

)

}


export default Login;