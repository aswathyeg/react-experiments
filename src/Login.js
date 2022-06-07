import React from 'react';

const Login =()=>{
const handleSubmit=()=>{

}
    return(
        <div style={{ display:"flex", justifyContent: "center", marginTop: 30}}>
            <form style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,}}
            onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                
                <input type="text"
                placeholder="Username"
                style={{ marginBottom: 5 }}/>
                <input type="password"
                placeholder="Password" 
                style={{ marginBottom: 10 }}/>
                <button type="submit"
                style={{ alignSelf: "center" }}>Submit</button>
               
            </form>
        </div>
    )

}
export default Login;