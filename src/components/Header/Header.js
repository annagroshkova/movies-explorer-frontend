import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../images/logo.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/**
 * @typedef {import("../../types").CurrentUser} CurrentUser
 */

export default function Header(props) {
  const { theme = 'default' } = props;

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className={`header header_theme_${theme}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      </Link>
      {currentUser ? (
        <Navbar theme={theme} />
      ) : (
        <div className="header__links">
          <NavLink className="header__link header__link_type_clear" to="/register">
            Регистрация
          </NavLink>
          <NavLink className="header__link header__link_type_filled" to="/login">
            Войти
          </NavLink>
        </div>
      )}
    </header>
  );
}
