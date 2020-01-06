import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './web/Blog.js'
// import MovieIndex from './movies/MovieIndex';
import RedactorSystem from './redactorSystem/RedactorSystem';

function App() {
  return (
    <div className='container'>
      <hr />
      {/* <MovieIndex /> */}
      <RedactorSystem />
      <Blog />
    </div>
  );
}

export default App;
