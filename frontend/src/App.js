import './App.css';
import './style.css';
import { useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import { getUser } from './utilities/users-service'
import NavBar from './components/NavBar';
import AuthPage from "./pages/AuthPage";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(getUser());
  const [googleUser, setGoogleUser] = useState({});


  // this fn was moved up here so it can be passed to NavBar && AuthPage seperately
  function handleSignOut(e) {
    setGoogleUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    try {
      console.log(`user state mod: ${JSON.stringify(user)}`);
    } catch (err) {
      console.log(`app useeffect err: ${err}`)
    }
  },[user])

  return (
    <div className="App">
      <NavBar
        handleSignOut={handleSignOut}
        googleUser={googleUser}
        user={user}
        setUser={setUser}
      />
      {user || (Object.keys(googleUser).length !== 0) ?
        <div className="content-shell">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
        :
        <AuthPage
          setUser={setUser}
          setGoogleUser={setGoogleUser}
          handleSignOut={handleSignOut}
        />
      }
    </div>
  );
}

export default App;
