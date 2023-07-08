import React, {useState} from "react";

export default function Checkbox(props) {

  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
    // props.onChange?.(checked)
  }

  return (
    <div className={`checkbox ${checked ? "checkbox_checked" : ""}`} role="button" onClick={handleClick}>
      <div className={`checkbox__slider ${checked ? "checkbox__slider_checked" : ""}`}></div>
    </div>
  )
}