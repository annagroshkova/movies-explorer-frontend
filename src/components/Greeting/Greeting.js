import React from 'react';
import logo from '../../images/logo.svg';
import './Greeting.css';
import { Link } from 'react-router-dom';

export default function Greeting(props) {
  return (
    <div className="greeting">
      <Link to="/">
        <img className="greeting__logo" src={logo} alt="Логотип сайта" />
      </Link>
      <h2 className="greeting__text">{props.text}</h2>
    </div>
  );
}
