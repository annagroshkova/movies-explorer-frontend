import React from "react"
import Navbar from "../Navbar/Navbar";
import logo from "../../images/logo.svg";
import "./Header.css";


export default function Header() {

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта"/>
      <Navbar />
    </div>
  )
}