import React from "react"
import Checkbox from "./Checkbox";


export default function SearchBar() {
  return (
    <section className="search">
      <input className="search__input" type="search"/>
      <div className="search__checkbox">
        <Checkbox />
      </div>
      <div className="search__underline"></div>
    </section>
  )
}