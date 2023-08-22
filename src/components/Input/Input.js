import React, {useState} from 'react';
import './Input.css';
import {EMAIL_REGEX} from "../../utils/constants";

/**
 * @param {string} props.id
 * @param {string} props.type
 * @param {string} props.name
 * @param {number} props.minLength
 * @param {string} props.defaultValue
 * @param {boolean} props.required
 * @param {(value: string) => any} props.onChange
 * @param {(error: string | undefined) => any} props.onError
 */
export default function Input(props) {
  const { type, name, id, required, minLength, defaultValue, disabled } = props
  const [value, setValue] = useState(props.defaultValue)
  const [dirty, setDirty] = useState(false)

  function error(value) {
    if (required && !value) {
      return 'Это обязательное поле'
    }

    if (type === 'email' && !EMAIL_REGEX.test(value)) {
      return 'Введите корректный email'
    }

    if (minLength && value.length < minLength) {
      return `Минимальная длина ${minLength} символов`
    }
  }

  function handleChange(newValue) {
    if (!dirty && newValue !== defaultValue) {
      setDirty(true)
    }
    setValue(newValue)

    if (dirty) {
      props.onChange(newValue)
      props.onError(error(newValue))
    }
  }

  return (
    <div className="input">
      <label className="input__label" htmlFor={props.id}>
        {props.label}
      </label>

      <input
        className="input__field"
        type={type}
        id={id}
        name={name}
        minLength={minLength}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e.target.value)}
        required={required}
        disabled={disabled}
      />

      {dirty && error(value) && <div className="input__error">{error(value)}</div>}
    </div>
  );
}
