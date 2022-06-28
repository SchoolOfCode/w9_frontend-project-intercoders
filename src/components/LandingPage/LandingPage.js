import React from 'react'
import Login from "../Login/Login"
import Register from "../Register/Register"


// console.log("Inside Axios");
// Axios.post("http://localhost:3001/users/login", {
//   username: username,
//   password: password,
// }).then((response) => {
//   console.log(response.data.payload);
//   if (response.data.payload.length > 0) {
//     console.log("Hello, " + response.data.payload[0].username);
//     setLoginStatus("Hello, " + response.data.payload[0].username);
//   } else {
//     console.log("User is not found");
//     setLoginStatus("User is not found");
//   }




function LandingPage() {
    const [loginStatus, setLoginStatus] = useState("");

    console.log("Inside Axios");
    Axios.post("http://localhost:3001/users/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data.payload);
      if (response.data.payload.length > 0) {
        console.log("Hello, " + response.data.payload[0].username);
        setLoginStatus("Hello, " + response.data.payload[0].username);
      } else {
        console.log("User is not found");
        setLoginStatus("User is not found");
      }

      return( <div>
      <Register />
        <Login onSubmit={login} />
        <br></br>
        <h1>{loginStatus}</h1>
        </div>
        )
}

export default LandingPage