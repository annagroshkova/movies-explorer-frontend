import React from "react"
import Header from "../Header/Header"
import SearchBar from "../SearchBar/SearchBar";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import "./Main.css";

export default function Main() {
  return (
  <div className="main">
    <Header />
    <SearchBar />
    <Movies />
    <Footer />
  </div>
  )
}