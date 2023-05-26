
import { useEffect, useState } from 'react';
import logo from '../images/logo.jpg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function UserLogin() {

    
  
  let [email,setemail] = useState('')
  let [password,setpassword] = useState('')

const navigate = useNavigate();


  let[tokenValue , setTokenValue] = useState('')
let submitLogin = (e) => {
  e.preventDefault();

  if(email === '' || password === ''){
    alert("empty form")
  }
  else{
    axios.post('https://api.store.ellcart.com/users/login', {
      email,password
    })
    .then(function (response) {
      console.log(response);
      alert('login successful')
      setTokenValue(response.data.authorisation.access_token)
      
    })
    .catch(function (error) {
      console.log(error);
      alert('wrong credentials')
    });
  }
}

useEffect(() => {
  console.log("hello");
  if(tokenValue !== ''){
    localStorage.setItem("ElcartUserToken", tokenValue);
    navigate("/frontend/dashboardmain")
  }
} , [tokenValue])

  return (
    <>
  
    <div className="mainSection">
        <div className="row g-0">
           <div className="col-md-6 ">
             <div className="whiteBox">
          <div className="panel panel-default">
              <div className="panel-heading">
                 <img src={logo} className="img-fluid" />
                
                 <h2>Login</h2>
                 <p>Don't have an account? <a href="{{route('register')}}">Sign up</a></p>
              </div>
              <div className="panel-body">

              <form onSubmit={submitLogin}>
                <div className="form-group">
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="form-group">         
                    <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>

              <div className="row mx-0 g-0">
                  <div className="col-md-7 col-6">
                        <div className="checkbox">
                              <label><input type="checkbox" name="remember" /> Remember me</label>
                          </div>
                  </div>
                  <div className="col-md-5 col-6">
                      <a href="">Forgot Password?</a>
                  </div>
              </div>

                  <input type="submit" />
           </form>
          </div>          
             </div>
            </div>
         </div>  
      

      
      <div className="col-md-6 ">
        <div className="darkBox d-none d-sm-none d-md-block d-lg-block">
            <div className="DarkPanel">
          <h1>Ellcart</h1>
          <p>Omni Channel Ecommerce store management platform which simplifies, centralize and automate store management tasks, shipping process, marketing and reporting.</p>
          
          <p className="joinedLine">More than 17k people joined us, it's your turn</p>
          <h6>&copy;Copyright Nest Software Private Limited.</h6>
           </div>
         </div>
      </div>    
      
      
        </div>
    </div>
    
   </>
  )
}