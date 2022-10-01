import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./logout";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const className = `container d-flex flex-column align-items-center ${props.className}`;

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={className}>
        <h1>Hello, {user.name}</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;