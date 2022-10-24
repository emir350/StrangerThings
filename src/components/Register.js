// HOW TO CREATE A REGISTER FORM (OR ANY FORM THAT USES A POST REQUEST TO CREATE NEW DATA)
// STEP 1) Don't forget to import the useState hook from React 
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Register = () => {
    // Step 2) Create some state (you might need multiple!) to hold the username / password / whatever other authentication info you want from your users. 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    // Step 3) We need to write a callback function that will do SOMETHING the moment the user hits the register for new account (i.e. the Submit) button. 
        // Note: This is where you will need to write your POST request using the fetch API
        // Another note: You will need to pass in an event parameter into your callback function. Then, you need to use this event parameter, and specifically, you need to call the event.preventDefault() method to prevent the form from automatically refreshing the webpage (which is not what we want in a SPA - Single Page Application).
    async function formSubmitHandler (event) {
        event.preventDefault(); 
        try {
            // Optional step: You can put if-else logic to determine whether your username / password combo is valid 

            // Some notes about customizing our fetch method
                // Arguments of the fetch method: 
                    // 1) What is the API endpoint url that you are trying to reach? 
                    // 2) [optional] An object that allows us to customize our fetch method to handle different types of requests (such as POST, DELETE, PATCH etc.)
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
                {
                    // Step 3a) What is the type of request that we are trying to do? 
                        // In order to do this step, you need to specify a "method" key on your object with the key-value pair. 
                        // Note: You have to type in the type of request in all caps / uppercase 
                    method: "POST",
                    // Step 3b) What headers does this API endpoint require? In order to figure this out, you need to read the API documentation for that specific API endpoint
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // Step 3c) Next, we have to specify what is the BODY of this request. In other words, what data are we trying to pass to this API endpoint? 
                        // Note: You will need to pass the data that you're trying to send in a method called JSON.stringify(). This method will "translate" your data to a format that is readable by the API you are trying to call. 
                    body: JSON.stringify({
                        user: {
                            // username,
                            // password
                            username: username,
                            password: password
                        }
                    })
                }
            )
            // Step 3d) Don't forget to translate your promise response from your request to JSON. 
            const data = await response.json(); 
            console.log("This is our translated data: ", data)

            // Step 3e) We need to use a tool called localStorage 
                // a) I need to take that JSON web token from the translated promise from step 3d and I want to store it in localStorage.
                // Note: The way that you can store something in localStorage is by using a method called localStorage.setItem()   
                    // Note: The localStorage.setItem() method takes in 2 arguments:
                        // 1) What is the name of the key? This value should be a string
                        // 2) What is the value of that key? 
            // This step is where we are "saving our wristband / concert ticket" that allows us to access exclusive features of our website. 
            localStorage.setItem("token", data.data.token)
        } catch (error) {
            console.log(error); 
        }
    }   

    // OUR CALLBACK FUNCTIONS FOR STEP 5B -->
    function updateUsernameState(event) {
        // console.log("This is the value of the event target: ", event.target.value)
        setUsername(event.target.value)
    }

    function updatePasswordState(event) {
        // console.log("This is the value of the event target: ", event.target.value)
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1><u>Register</u></h1>
           <create>
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username Here</label>
                <input type="text" value={username} onChange={updateUsernameState}></input>
                <br/>
                <label>Enter New Password Here</label>
                <input type="text" value={password} onChange={updatePasswordState}></input>
                <br/>
                <button type="submit">Register For New Account</button>
            </form>
        </create>
     </div>
    )
}

export default Register;