import React, { useState } from "react";
import ReactDOM from "react-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit (event) {
    event.preventDefault();

    try {
        const response = await fetch(
            "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
            {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },

    
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    }
)

const data = await response.json(); 
console.log("This is our translated data: ", data)

localStorage.setItem("token", data.data.token)
        } catch (error) {
            console.log(error); 
        }
    }   

    function LoginName(event) {
        // console.log("This is the value of the event target: ", event.target.value)
        setUsername(event.target.value)
    }

    function LoginPass(event) {
        // console.log("This is the value of the event target: ", event.target.value)
        setPassword(event.target.value)
}
  
return (
 <div id="login">
    <h1><u>Login</u></h1>
     <create>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </create>
</div>
  )
}


export default Login;