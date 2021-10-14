import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <Link to="/login">
        <img
          src="https://fontmeme.com/permalink/211014/471fe6761cb14bcc3c8e464afdab4d68.png"
          alt="pokemon-font"
          border="0"
        ></img>
      </Link>

      <h2>
        <img
          src="https://fontmeme.com/permalink/211014/3c2b3c44c030afc634018bc3993f60ae.png"
          alt="pokemon-font"
          border="0"
        ></img>
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">
            <img
              src="https://fontmeme.com/permalink/211014/1afb81a824d8a8dccf7b2f78afa6f15c.png"
              alt="pokemon-font"
              border="0"
            ></img>
          </label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="email">
            {" "}
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
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
