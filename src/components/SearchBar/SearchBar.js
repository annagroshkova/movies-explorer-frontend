import React, {useState} from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchBar.css';

/**
 * @typedef {import("../../types").SearchParams} SearchParams
 */

// todo: localStorage

/**
 * @param {(params: SearchParams) => any} props.onChange
 */
export default function SearchBar(props) {
  const [text, setText] = useState('');
  const [shorts, setShorts] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.onChange({
      text,
      shorts,
    });
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" type="search" placeholder="Фильм"
          defaultValue={''}
               onChange={(e) => setText(e.target.value)}
               required />
        <button className="search__submit-btn">Найти</button>
      </form>

      <div className="search__checkbox-container">
        <p className="search__checkbox-label">Короткометражки</p>
        <Checkbox onChange={setShorts} />
      </div>
    </section>
  );
}
