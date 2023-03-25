import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [redirect, setRedirect] = useState(false);
  const loginUser = async (login) => {
    try {
      const response = await axios.post("http://localhost:8000/login", login, {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert("Login successful");
        setRedirect(true);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during Login");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(login);
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
};
