import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';

export default function Profile(props) {
  const user = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState({ ...user });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  async function handleEdit(e) {
    e.preventDefault();

    if (!edit) {
      setEdit(true);
      return;
    }

    try {
      setLoading(true);
      const newUser = await mainApi.patchMe({
        name: editUser.name,
        email: editUser.email,
      });
      props.onProfileSave(newUser);
      setEdit(false);
      alert('Сохранено!');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  function submitEnabled() {
    if (loading) return false;
    return !edit || editUser.email !== user.email || editUser.name !== user.name;
  }

  function handleLogout() {
    props.onLogout();
  }

  return (
    <div className="profile">
      <Header />
      {editUser && (
        <div className="profile__container">
          <h1 className="profile__title">Привет, {editUser.name}!</h1>
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
                defaultValue={editUser.name}
                disabled={!edit || loading}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                required
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
                defaultValue={editUser.email}
                disabled={!edit || loading}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                required
              />
            </div>

            <div className="profile__buttons">
              <button
                type="button"
                className="profile__button profile__button_type_edit"
                disabled={!submitEnabled()}
                onClick={handleEdit}
              >
                {edit ? 'Сохранить' : 'Редактировать'}
              </button>
              <button
                type="button"
                className="profile__button profile__button_type_exit"
                onClick={handleLogout}
                disabled={loading}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
