import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getToken, removeToken, saveToken } from '../../utils/storage';
import { api } from '../../utils/api';
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import './App.css';

export default function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(/** @type {string | null} */ getToken());
  const [currentUser, setCurrentUser] = useState(
    /** @type {import("../../types").UserObject | {}} */ {},
  );

  useEffect(() => {
    getMyInfo();
  }, []);

  /**
   *
   * @param {import("../../types").SigninResponse} res
   */
  function handleLogin(res) {
    saveToken(res.token);
    getMyInfo();
  }

  function handleLogout() {
    removeToken();
    setToken(null);
    setCurrentUser(null);
  }

  function getMyInfo() {
    if (!getToken()) return;

    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setToken(getToken());
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/sign-in"
            element={token ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/sign-up" element={token ? <Navigate to="/" replace /> : <Register />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
