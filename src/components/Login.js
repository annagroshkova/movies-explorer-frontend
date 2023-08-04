import React from "react"
import Greeting from "./Greeting";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default function Login() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="sign">
      <Greeting text="Рады видеть!"/>
      <form className="sign__form">
        <fieldset className="sign__fieldset">

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
          />
        </fieldset>

        <SubmitButton text="Войти" />
        <p className="sign__text">Ещё не зарегистрированы? <a className="sign__link" href="/">Регистрация</a></p>

      </form>
    </div>
  )

}