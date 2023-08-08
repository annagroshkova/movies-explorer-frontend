import {useState} from "react"
import profileIcon from "../../images/profile-icon.svg"
import headerMenuIcon from "../../images/header-menu-icon.svg"
import closeIcon from "../../images/close-icon.svg"
import useBreakpoint from "../../hooks/useBreakpoint"
import "./Navbar.css"

export default function Navbar() {

  const isDesktop = useBreakpoint()

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <button className="navbar__menu-btn" onClick={toggleOpen}><img className="navbar__menu-icon" src={headerMenuIcon} alt="Иконка меню"/></button>
      {(open) && (<div className="navbar__overlay"></div>)}
      {(open || isDesktop) && (
        <div className={`navbar__menu-container ${open ? "navbar__menu-container_active" : ""}`}>
          <button className="navbar__close-btn" onClick={toggleOpen}><img className="navbar__close-icon" src={closeIcon} alt="Иконка крестик"/></button>
          <div className="navbar__links">
            <a className="navbar__link" href="#">Главная</a>
            <a className="navbar__link" href="#">Фильмы</a>
            <a className="navbar__link" href="#">Сохранённые фильмы</a>
            <a className="navbar__link navbar__profile-link" href="#">
              <p className="navbar__profile-text" >Аккаунт</p>
              <img className="navbar__profile-icon" src={profileIcon} alt="Иконка профиля"/>
            </a>
          </div>
        </div>)}
    </div>
  )
}