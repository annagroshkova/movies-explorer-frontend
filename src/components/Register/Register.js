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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    /** @type {User} */ {
      name: '',
      email: '',
      password: '',
    },
  );
  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  function submitEnabled() {
    return (
      !loading &&
      user.name &&
      user.email &&
      user.password &&
      !userError &&
      !emailError &&
      !passError
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
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
            onError={setUserError}
            required={true}
            disabled={loading}
          />

          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            defaultValue={user.email}
            onChange={(email) => setUser({ ...user, email })}
            onError={setEmailError}
            required={true}
            disabled={loading}
          />

          <Input
            label="Пароль"
            id="password"
            name="password"
            type="password"
            defaultValue={user.password}
            onChange={(password) => setUser({ ...user, password })}
            onError={setPassError}
            required={true}
            minLength={8}
            disabled={loading}
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
