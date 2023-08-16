import React, { useState } from 'react';
import './Checkbox.css';

/**
 * @param {(checked: boolean) => any} props.onChange
 */
export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    const newChecked = !checked;
    setChecked(newChecked);
    props.onChange(newChecked);
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
