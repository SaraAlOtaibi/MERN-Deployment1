import './App.css';
import React, {useState,useEffect} from 'react';
import { Router, Link, navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllAuthors from './components/AllAuthors';
import AuthorForm from './components/AuthorForm';
import New from './components/New';
import Update from './components/Update';


function App() {

  return (
    <div className='container'>
      <h1 className='text-center'>Favorite Authors</h1>
      <Link to='api/new'> Add an author </Link>
      <Router>
        <AllAuthors path='/'/>
        <New path='/api/new' />
        <Update path='/api/edit/:_id'/>
      </Router> 
    </div>
  );
}

export default App;
