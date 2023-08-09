import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

export default function Profile() {
  const [edit, setEdit] = React.useState(false);

  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <h1 className="profile__title">Привет, Анна!</h1>
        <form className="profile__form">
          <div className="profile__input">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__input-field"
              id="name"
              name="name"
              type="text"
              defaultValue="Анна"
              disabled={!edit}
            />
          </div>

          <hr className="profile__line" />

          <div className="profile__input">
            <label className="profile__label" htmlFor="email">
              Email
            </label>
            <input
              className="profile__input-field"
              id="email"
              name="email"
              type="email"
              defaultValue="anna.matvyeyenko@gmail.com"
              disabled={!edit}
            />
          </div>
        </form>
        <div className="profile__buttons">
          <button
            className="profile__button profile__button_type_edit"
            onClick={() => setEdit(true)}
          >
            Редактировать
          </button>
          <button className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
        </div>
      </div>
    </div>
  );
}
