import React from 'react';
import './Input.css';

/**
 * @param {string} props.id
 * @param {string} props.type
 * @param {string} props.name
 * @param {number} props.minLength
 * @param {string} props.defaultValue
 * @param {boolean} props.required
 * @param {(value: string) => any} props.onChange
 */
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
