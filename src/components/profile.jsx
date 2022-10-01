import { useAuth0 } from "@auth0/auth0-react";
import React, {useState, useRef} from "react";
import {Button} from "react-bootstrap";
import ProfileSettings from "./profilesettings";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [settingsOn, setSettingsOn] = useState(false);

  const className = `container d-flex flex-column align-items-center ${props.className}`;

  const eventClick_Settings = ({target}) => {
    setSettingsOn(!settingsOn);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (settingsOn) {
    return (
        <>
            <ProfileSettings user={user} />
            <Button onClick={eventClick_Settings} variant="warning">Close Settings</Button>
        </>
    )
  }

  return (
    isAuthenticated && (
      <div className={className}>
        <h1>Hello, {user.name}</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Button onClick={eventClick_Settings} variant="info">Account Settings</Button>
      </div>
      
    )
  );
};

export default Profile;