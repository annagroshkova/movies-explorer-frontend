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
        <img className="greeting__logo" src={logo} alt="Логотип сайта" />
      </Link>
      {props.isLoged ? <Navbar theme={props.theme}/> : (
        <div className="hero__links">
          <NavLink className="hero__link hero__link_type_clear" to="/register">
            Регистрация
          </NavLink>
          <NavLink className="hero__link hero__link_type_filled" to="/login">
            Войти
          </NavLink>
        </div>
      )}
    </header>
  );
}
