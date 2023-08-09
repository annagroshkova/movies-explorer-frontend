import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <SearchBar />
      <Movies />
      <Footer />
    </div>
  );
}
