import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=637033dc';

const movie1 = {
  Title: 'Terminator 2: Judgment Day',
  Year: '1991',
  imdbID: 'tt0103064',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    searchMovies('Terminator');
  }, []);

  return (
    <div className='app'>
      <h1>Movieland</h1>
      <div className='search'>
        <input placeholder='Search for a movie!' value='Superman' onChange={() => {}}></input>
        <img src={SearchIcon} alt='search' onClick={() => {}} />
      </div>
      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
