import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const {isLoading} = useAuth0();

  if (isLoading) {
    return (
      <div className="container d-flex h-100 justify-content-center align-items-center">
        <p className="display-5">Loading...</p>
      </div>
    ) 
      
  }

  return (
    <div className="constainer mt-3 d-flex flex-column align-items-center">
      <h1 className="display-4">React application</h1>
      <Profile className="mt-5" />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
