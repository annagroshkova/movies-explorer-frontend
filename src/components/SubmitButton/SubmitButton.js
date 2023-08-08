import React from "react";
import "./SubmitButton.css"

export default function SubmitButton(props) {
  return (
    <button className="sign__submit-button"
            type="submit"
            disabled={props.disabled}
            onClick={props.onClick}
            >
              {props.text}
    </button>
  )
}