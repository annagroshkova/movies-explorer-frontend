import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="search" placeholder="Фильм" required />
        <button className="search__submit-btn">Найти</button>
      </form>
      <div className="search__checkbox-container">
        <p className="search__checkbox-label">Короткометражки</p>
        <Checkbox />
      </div>
    </section>
  );
}
