import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
function Login() {

    let [username , setusername] = useState("")
    let [Passowrd , setPassowrd] = useState("")

    let [access_token , setaccess_token] = useState("")

    useEffect(() => {
        if(access_token !== ""){
            localStorage.setItem("tokenId", access_token);
        }
    } , [access_token])

    let handleSubmit = () => {
        // e.preventDefault()
        if (username === "" || Passowrd === "") {
            alert("empty form")
        } else {

            axios.post('https://api.store.ellcart.com/user/login', {
                email: username ,password: Passowrd
              })
              .then(function (response) {
                alert('result came')
                console.log(response);
                console.log(response.data.authorisation.access_token);
                setaccess_token(response.data.authorisation.access_token)
              })
              .catch(function (error) {
                alert('error came')
                console.log(error);
              });


            console.log(username);
            console.log(Passowrd);
        }
    }
    return (

        <>
            <h1>
                    <input type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)}/>
                    <input type="text" placeholder="password" value={Passowrd} onChange={(e) => setPassowrd(e.target.value)}/>
                    <button type="submit" onClick={() => handleSubmit()}>Submit</button>
           
            </h1>
        </>
    )

}

export default Login;