import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialFormValues);
  const history = useHistory();

  const handleChanges = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        history.push("/bubble-page");
      })
      .catch((error) => {
        alert("Login failed.");
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
