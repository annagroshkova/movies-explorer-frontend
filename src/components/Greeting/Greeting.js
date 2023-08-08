import React from "react"
import logo from "../../images/logo.svg"
import "./Greeting.css"

export default function Greeting(props) {
  return (
    <div className="greeting">
      <img className="greeting__logo" src={logo} />
      <h2 className="greeting__text">{props.text}</h2>
    </div>
  )

}