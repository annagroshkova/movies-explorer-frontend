import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Saved.css';

export default function Saved() {
  return (
    <div className="saved">
      <Header />
      <SearchBar />
      <Movies />
      <Footer />
    </div>
  );
}
