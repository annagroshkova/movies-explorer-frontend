import { useState } from 'react';
import profileIcon from '../../images/profile-icon.svg';
import headerMenuIcon from '../../images/header-menu-icon.svg';
import closeIcon from '../../images/close-icon.svg';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const isMain = props.theme === 'main';
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const navLinkClassName = ({ isActive }) =>
    `navbar__link ${isActive ? 'navbar__link_active' : ''}`;

  return (
    <div className="navbar">
      <button className="navbar__menu-btn" onClick={toggleOpen}>
        <img className="navbar__menu-icon" src={headerMenuIcon} alt="Иконка меню" />
      </button>
      <div
        className={`navbar__overlay
      ${open ? 'navbar__overlay_opened' : ''}`}
      ></div>
      <div
        className={`navbar__menu-container
      ${open ? 'navbar__menu-container_active' : ''}
      ${isMain ? 'navbar__menu-container_theme_main' : ''}
      `}
      >
        {open && (
          <button className="navbar__close-btn" onClick={toggleOpen}>
            <img className="navbar__close-icon" src={closeIcon} alt="Иконка крестик" />
          </button>
        )}
        <div className="navbar__links">
          {open && (
            <NavLink className={navLinkClassName} to="/">
              Главная
            </NavLink>
          )}
          <NavLink className={navLinkClassName} to="/home">
            Фильмы
          </NavLink>
          <NavLink className={navLinkClassName} to="/saved">
            Сохранённые фильмы
          </NavLink>
          <div className="navbar__spacer"></div>
          <NavLink
            className={(props) => `${navLinkClassName(props)} navbar__profile-link`}
            to="/profile"
          >
            <p className="navbar__profile-text">Аккаунт</p>
            <img className="navbar__profile-icon" src={profileIcon} alt="Иконка профиля" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
