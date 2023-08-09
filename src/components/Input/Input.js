import React from 'react';
import './Input.css';

export default function Input(props) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={props.id}>
        {props.label}
      </label>

      <input
        className="input__field"
        type={props.type}
        id={props.id}
        name={props.name}
        minLength={props.minLength}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChange(e.target.value)}
        required={props.required}
      />

      {props.error && <div className="input__error">{props.error}</div>}
    </div>
  );
}
