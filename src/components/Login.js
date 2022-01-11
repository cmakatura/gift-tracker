import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login({ onLogin }) {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
      username: "",
      password: "",
    });
  
    function handleChange(e) {
      setLoginData({
        ...loginData, [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
       
      e.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((r) => r.json())
        .then((user) => {
          onLogin(user);
          history.push("/Home");
        });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login;
  export { useHistory } from "react-router-dom";
