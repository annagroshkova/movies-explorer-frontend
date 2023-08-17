import React, { useState } from 'react';
import Greeting from '../Greeting/Greeting';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Register.css';
import { Link } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { saveToken } from '../../utils/storage';

/**
 * @typedef {import("../../types").User} User
 */

export default function Register(props) {
  const [user, setUser] = useState(
    /** @type {User} */ {
      name: '',
      email: '',
      password: '',
    },
  );

  function submitEnabled() {
    return user.name && user.email && user.password;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newUser = await mainApi.signup(user);

      const { token } = await mainApi.login({
        email: user.email,
        password: user.password,
      });
      saveToken(token);

      setUser(newUser);
      props.onRegister(newUser);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="sign">
      <Greeting text="Добро пожаловать!" />
      <form className="sign__form">
        <fieldset className="sign__fieldset">
          <Input
            label="Имя"
            id="name"
            name="name"
            type="text"
            defaultValue={user.name}
            onChange={(name) => setUser({ ...user, name })}
            required={true}
          />

          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            defaultValue={user.email}
            onChange={(email) => setUser({ ...user, email })}
            required={true}
          />

          <Input
            label="Пароль"
            id="password"
            name="password"
            type="password"
            defaultValue={user.password}
            onChange={(password) => setUser({ ...user, password })}
            required={true}
            minLength={8}
          />
        </fieldset>

        <SubmitButton
          text="Зарегистрироваться"
          disabled={!submitEnabled()}
          onClick={handleSubmit}
        />

        <p className="sign__text">
          Уже зарегистрированы?{' '}
          <Link className="sign__link" to="/login">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
