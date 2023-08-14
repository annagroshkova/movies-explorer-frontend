import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../images/logo.svg';
import './Header.css';
import {Link, NavLink} from "react-router-dom";

export default function Header(props) {
  const isMain = props.theme === 'main'

  return (
    <header className={`header ${props.theme ? `header_theme_${props.theme}` : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      </Link>
      {props.isLogged ? <Navbar theme={props.theme}/> : (
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
