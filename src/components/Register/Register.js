import React from "react"
import Greeting from "../Greeting/Greeting";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Register.css"
import {Link} from "react-router-dom";

export default function Register() {

  const [name, setName] = React.useState("Anna");
  const [email, setEmail] = React.useState("anna.matvyeyenko@gmail.com");
  const [password, setPassword] = React.useState("");

  return (
    <div className="sign">
      <Greeting text="Добро пожаловать!"/>
      <form className="sign__form">
        <fieldset className="sign__fieldset">
          <Input label="Имя"
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={name}
                  onChange={setName}
                  required={true}
                  />

          <Input label="E-mail"
                  id="email"
                  name="email"
                  type="email"
                 defaultValue={email}
                  onChange={setEmail}
                 required={true}
          />

          <Input label="Пароль"
                  id="password"
                  name="password"
                  type="password"
                 defaultValue={password}
                  onChange={setPassword}
                 required={true}
                 minLength={8}
                 error="Что-то пошло не так..."
          />
        </fieldset>

        <SubmitButton text="Зарегистрироваться" disabled={true} />
        <p className="sign__text">Уже зарегистрированы? <Link className="sign__link" to="/login">Войти</Link></p>

      </form>
    </div>
  )

}