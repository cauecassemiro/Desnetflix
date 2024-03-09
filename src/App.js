import React, { useEffect, useState } from 'react';
import tvmaze from './tvmaze';

export default () => {

  const [movieList, setMovieList] = useState([]);

useEffect(()=>{
  const loadAll = async () => {
    let list = await tvmaze.getHomeList();
    setMovieList(list);
  }

    loadAll();
}, []);

  return (
    <div className="page">
      <section className="listas">
        {movieList.map((item, key)=> (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}