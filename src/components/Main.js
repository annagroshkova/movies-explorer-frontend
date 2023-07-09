import React from "react"
import Header from "./Header"
import SearchBar from "./SearchBar";
import MoviesCardList from "./MoviesCardList";
import Footer from "./Footer";

export default function Main() {
  return (
  <div className="main">
    <Header />
    <SearchBar />
    <MoviesCardList />
    <Footer />
  </div>
  )
}