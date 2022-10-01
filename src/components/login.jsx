import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
//import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
    )
  )
};

export default LoginButton;