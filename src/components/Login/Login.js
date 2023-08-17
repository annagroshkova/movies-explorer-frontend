import React, { useState } from 'react';
import Greeting from '../Greeting/Greeting';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Login.css';
import { Link } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { saveToken } from '../../utils/storage';

/**
 * @typedef {import("../../types").LoginInput} LoginInput
 */

export default function Login(props) {
  const [user, setUser] = useState(
    /** @type {LoginInput} */ {
      email: '',
      password: '',
    },
  );

  function submitEnabled() {
    return user.email && user.password;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { token } = await mainApi.login({
        email: user.email,
        password: user.password,
      });
      saveToken(token);

      props.onLogin();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="sign">
      <Greeting text="Рады видеть!" />
      <form className="sign__form">
        <fieldset className="sign__fieldset">
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
          />
        </fieldset>

        <SubmitButton text="Войти" disabled={!submitEnabled()} onClick={handleSubmit} />

        <p className="sign__text">
          Ещё не зарегистрированы?{' '}
          <Link className="sign__link" to="/register">
            Регистрация
          </Link>
        </p>
      </form>
    </div>
  );
}
