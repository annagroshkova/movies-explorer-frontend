import {useState} from "react"
import profileIcon from "../images/profile-icon.svg"
import headerMenuIcon from "../images/header-menu-icon.svg"
import closeIcon from "../images/close-icon.svg"
import useBreakpoint from "../hooks/useBreakpoint"

export default function Navbar() {

  const isDesktop = useBreakpoint()

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="header__navbar">
      <button className="header__menu-btn" onClick={toggleOpen}><img className="header__menu-icon" src={headerMenuIcon} alt="Иконка меню"/></button>
      {(open) && (<div className="header__overlay"></div>)}
      {(open || isDesktop) && (
        <div className={open ? "header__menu-container header__menu-container_active" : "header__menu-container"}>
          <button className="header__close-btn" onClick={toggleOpen}><img className="header__close-icon" src={closeIcon} alt="Иконка крестик"/></button>
          <div className="header__links">
            <a className="header__link header__main-page-link" href="#">Главная</a>
            <a className="header__link" href="#">Фильмы</a>
            <a className="header__link" href="#">Сохранённые фильмы</a>
            <a className="header__link header__profile-link" href="#">
              <p className="header__profile-text" >Аккаунт</p>
              <img className="header__profile-icon" src={profileIcon} alt="Иконка профиля
"/>
            </a>
          </div>
        </div>)}
    </div>
  )
}