import React, { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { GetMovieList } from "../src/network/movie.jsx";
import MovieList from './components/MovieList';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

function App() {
  const [state, setState] = useState("");
  const [string, setString] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const getData = async (s) => {
    const res = await GetMovieList(s);
    console.info(res.data.Search)
    setData(res);
  }

  // useEffect(() => {
  //   GetMovieList()
  //   .then((res) => res.data)
  //   .then((data) => setState(data.Search));
  // }, []);
  // useEffect(() => {
  //   console.info('hello');
  //   new Promise((res, rej) => {
  //     console.info('my');
  //   })
  //   console.info('world');
  // }, [])

  const HandleChange = (e) => {
    setState(e.target.value);
    setClick(false);
  }
  const HandleClick = async () => {
    setClick(true);
    const res = await GetMovieList(state);
    setData(res.data.Search);
  }
  // useEffect(() => {
  //   console.info(string);
  //   getData(string);
  // }, [string])

  return (
      <div>
        <input type="text" onChange={HandleChange}/>
        <button onClick={HandleClick}>Search</button>
        {(state === "batman" || state === "star wars") && click ?
          <MovieList data={data}/>
        :
          click&&<h2>검색 결과가 없습니다.</h2>
        }
      </div>
    
    
  );
}
export default App;