import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [register, setRegister] = useState([]);

  const newUser = async (register) => {
    try {
      const response = await axios.post("http://localhost:8000/register", register);
      if (response.status === 200) {
        alert('registration successful');
      } else {
        alert('registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('an error occurred during registration');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newUser(register);
  };

  const chanegeHanle = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="register">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={chanegeHanle}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={chanegeHanle}
        />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </>
  );
};

export default Register;
