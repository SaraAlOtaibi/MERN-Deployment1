
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import New from './New'
import DeleteButton from './DeleteButton';

const AllAuthors = () => {

  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        console.log(res.data);
        console.log('hi');
        res.data.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.size > b.size) ? 1 : -1) : -1 )
        setAuthors(res.data);
        setLoaded(true);
      }).catch(err => console.error(err));
  }

  /* const remove = _id => {
    axios.delete(`http://localhost:8000/restaurants/${_id}`)
      .then(res => {
        console.log(res);
        getAll();
      }).catch(err => console.error(err));
  } */

  /*
              {
              loaded && products.map( (product, id) =>  
              <div className='row'> 
              <div className='col-9'>
                <Link key={id} to={`/api/products/${product._id}`}> {product.title} </Link> 
              </div>
              <div className='col'>
                <button className="btn btn-primary mb-3" onClick={ () => navigate(`/api/products/${product._id}/edit`)}> Edit </button>
                <DeleteButton _id={product._id} successCallback={()=>getAll()} />
              </div> 
              </div>
              )
            }
  */

  return (
    <>
      <div className='row'>
        <div className='col'>
        <Link to='api/new'> Add an author </Link>
          <p> We have quotes by:</p>
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>Authors</th>
                <th>Actions Available</th>
              </tr>
              </thead>
              <tbody>
                {
                  loaded && authors.map ( (author, i ) => 
                  <tr key={i}>
                    <td> {author.name } </td>
                    <td>
                      <button className="btn btn-primary mb-3" onClick={ () => navigate(`/api/edit/${author._id}/`)}> Edit </button>
                      <DeleteButton _id={author._id} successCallback={()=>getAll()} />
                    </td>
                  </tr>
                  )
                }
              </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllAuthors;
