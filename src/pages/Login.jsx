import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { AUTH_TOKEN } from "../constants";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ history }) => {
  const [loginDetails, setLoginDetails] = useState({
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: ""
  });
  const { login, email, password, name } = loginDetails;

  const _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  const _confirm = async data => {
    const { token } = login ? data.login : data.signup;
    _saveUserData(token);
    history.push(`/`);
  };

  const handleOnChange = updateInputValue => e => {
    setLoginDetails({ ...loginDetails, [updateInputValue]: e.target.value });
  };

  const handleLogin = () => setLoginDetails({ ...loginDetails, login: !login });

  return (
    <div>
      <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={handleOnChange("name")}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={handleOnChange("email")}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={handleOnChange("password")}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => _confirm(data)}
          >
            {mutation => (
              <div className="pointer mr2 button" onClick={mutation}>
                {login ? "login" : "create account"}
              </div>
            )}
          </Mutation>
          <div className="pointer button" onClick={handleLogin}>
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
