import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home() {
  return (
    <>
      <Header isLogged={true}/>
      <main className="home">
        <SearchBar />
        <Movies canDelete={false} />
      </main>
      <Footer />
    </>
  );
}
