import React from "react";

export default function Input(props) {
  return (
    <div className="input">
      <label className="input__label"
      htmlFor={props.id}>{props.label}</label>
      <input className="input__field"
           type={props.type}
           id={props.id}
           name={props.name}
           defaultValue={props.defaultValue}
             onChange={e => props.onChange(e.target.value)}
             required={props.required}
            />
    </div>
  )
}