import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import './App.css';
import Saved from '../Saved/Saved';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getToken, removeToken } from '../../utils/storage';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    /** @type {import("../../types").CurrentUser | null} */ null,
  );
  const [token, setToken] = useState(/** @type {string | null} */ getToken());

  useEffect(() => {
    void getMyInfo();
  }, []);

  async function getMyInfo() {
    if (!getToken()) return;

    try {
      const user = await mainApi.getMe();
      setCurrentUser(user);
      setToken(getToken());
    } catch (err) {
      console.error(err);
    }
  }

  function handleRegister(user) {
    setCurrentUser(user);
    setToken(getToken());
    navigate('/home');
  }

  async function handleLogin() {
    await getMyInfo();
    navigate('/home');
  }

  function handleLogout() {
    removeToken();
    setToken(null);
    navigate('/');
    setCurrentUser(null);
  }

  function handleProfileSave(user) {
    setCurrentUser(user);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<ProtectedRoute loggedIn={token} element={Home} />} />
          <Route path="/saved" element={<ProtectedRoute loggedIn={token} element={Saved} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={token}
                element={Profile}
                onLogout={handleLogout}
                onProfileSave={handleProfileSave}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
