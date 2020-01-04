import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieIndex from './movies/MovieIndex';
import RedactorSystem from './redactorSystem/RedactorSystem';

function App() {
  return (
    <div className='container'>
      <hr />
      {/* <MovieIndex /> */}
      <RedactorSystem />
    </div>
  );
}

export default App;
