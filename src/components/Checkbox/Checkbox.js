import React from 'react';
import './Checkbox.css';

/**
 * @param {boolean} props.checked
 * @param {(checked: boolean) => any} props.onChange
 */
export default function Checkbox(props) {
  const { checked } = props;

  function handleClick() {
    props.onChange(!checked);
  }

  return (
    <div>
      <div
        className={`checkbox ${checked ? 'checkbox_checked' : ''}`}
        role="button"
        onClick={handleClick}
      >
        <div className={`checkbox__slider ${checked ? 'checkbox__slider_checked' : ''}`}></div>
      </div>
    </div>
  );
}
