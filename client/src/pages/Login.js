import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">
        <img
          src="https://fontmeme.com/permalink/211014/d2d4b17be0788711f5856aec8abb4e51.png"
          alt="pokemon-font"
          border="0"
        ></img>
      </Link>

      <h2>
        <img
          src="https://fontmeme.com/permalink/211014/9ac5e3a479690177435a1c2af2e27d81.png"
          alt="pokemon-font"
          border="0"
        ></img>
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">
            <img
              src="https://fontmeme.com/permalink/211014/3795834efcb30e69c219dc8763a08aaf.png"
              alt="pokemon-font"
              border="0"
            ></img>
          </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">
            <img
              src="https://fontmeme.com/permalink/211014/2ea275d84e597be32dff58e8142d93f4.png"
              alt="pokemon-font"
              border="0"
            ></img>
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
