import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Saved.css';

export default function Saved() {
  return (
    <>
      <Header isLogged={true}/>
      <main className="saved">
        <SearchBar />
        <Movies canDelete={true} />
        <Footer />
      </main>
    </>
  );
}
