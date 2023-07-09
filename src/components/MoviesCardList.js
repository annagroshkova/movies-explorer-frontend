import React from "react";
import MoviesCard from "./MoviesCard"


export default function MoviesCardList() {
  const cards = [
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: false,
      image: '/cards/movie_placeholder.jpg',
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: true,
      image: '/cards/movie_placeholder_1.jpg'
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: false,
      image: '/cards/movie_placeholder_2.jpg'
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: false,
      image: '/cards/movie_placeholder_3.jpg'
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: true,
      image: '/cards/movie_placeholder_4.jpg'
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      isSaved: true,
      image: '/cards/movie_placeholder_5.jpg'
    }
  ]

  return (
    <>
      <section className="movies">
        {cards.map(card => <MoviesCard card={card}/>)}
      </section>
      <div className="movies__button-container">
        <button className="movies__load-more-btn" type="button" aria-label="Загрузить ещё">Ещё</button>
      </div>
    </>
  )
}