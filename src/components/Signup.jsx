import React from 'react'

function Signup() {

    useEffect(() => {
        console.log("hello");
        if(tokenValue !== ''){
          localStorage.setItem("ElcartUserToken", tokenValue);
          navigate("/signup")
        }
      } , [tokenValue])
  return (
    <>
    <div>Signup</div>

    </>
  )
}

export default Signup