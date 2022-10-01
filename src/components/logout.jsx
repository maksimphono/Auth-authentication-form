import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button className="btn btn-warning" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
    </button>
    ) 
    
  );
};

export default LogoutButton;