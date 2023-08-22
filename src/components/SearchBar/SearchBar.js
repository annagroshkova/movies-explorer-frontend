import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchBar.css';

/**
 * @typedef {import("../../types").SearchParams} SearchParams
 */

/**
 * @param {(params: SearchParams) => any} props.onChange
 * @param {boolean} props.persist
 */
export default function SearchBar(props) {
  const { persist, onChange } = props;
  const [text, setText] = useState('');
  const [shorts, setShorts] = useState(false);

  useEffect(() => {
    const { text, shorts } = JSON.parse(
      (persist && localStorage.getItem('searchParams')) || null,
    ) || {
      text: '',
      shorts: false,
    };
    setText(text);
    setShorts(shorts);
    onChange({ text, shorts });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    handleChange({ text, shorts });
  }

  function handleSetShorts(value) {
    setShorts(value);
    handleChange({ text, shorts: value });
  }

  function handleChange(params) {
    if (props.persist) {
      localStorage.setItem('searchParams', JSON.stringify(params));
    }

    onChange(params);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="search"
          placeholder="Фильм"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="search__submit-btn">Найти</button>
      </form>

      <div className="search__checkbox-container">
        <p className="search__checkbox-label">Короткометражки</p>
        <Checkbox checked={shorts} onChange={handleSetShorts} />
      </div>
    </section>
  );
}
