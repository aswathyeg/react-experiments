import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accounts, setAccounts] = useState([
        { username: "JohnDoe1", password: "1234567" },
    ]);

    const onSubmit = (user, psd) => {
        for (const account of accounts) {
            if (account.username == user && account.password == psd) {
                return true;

            }
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();// prevents page refresh
        if (onSubmit(username, password)) {
            alert("Login Succesfully. Hi, " + username + ".");
        }
        else if (username.length > 6 && password.length > 6) {
            setAccounts([...accounts, { username, password }])
            alert("Logged in successfully! Welcome, " + username + ".");
        }
        else {
            alert("Username and password must be more than 6 characters.");
            return;
        }
        setUsername("");
        setPassword("");

    }


    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
            <form style={{
                display: "flex",
                flexDirection: "column",
                border: "solid",
                padding: 10,
            }}
                onSubmit={handleSubmit}>
                <h1>Login Form</h1>

                <input type="text"
                    placeholder="Username"
                    value={username}
                    style={{ marginBottom: 5 }}
                    onChange={(e) => {
                        e.target.value.length < 20 ? setUsername(e.target.value) : alert('Username cannot exceed 20 charecters')

                    }} />

                <input type="password"
                    placeholder="Password"
                    value={password}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        e.target.value.length < 20 ? setPassword(e.target.value) : alert('Password cannot exceed 20 charecters')
                    }}
                />

                <button type="submit"
                    style={{ alignSelf: "center" }}
                    onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )

}
export default Login;