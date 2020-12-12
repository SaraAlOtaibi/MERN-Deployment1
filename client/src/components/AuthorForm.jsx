
import PropTypes from 'prop-types';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Router, Link, navigate} from '@reach/router';


const AuthorForm = (props) => {
  const { initialName, onSubmitProp, getErrors, type} = props;
  const [name, setName] = useState(initialName);
  const [errors, setErrors] = useState({});

  const onSubmitHandler = e => {
      e.preventDefault();
      const errs = onSubmitProp({name});
      if (errs){
        setErrors(errs);
        }
      //getTheErrors();
      setName(initialName);
      //navigate("/");
  }

  function getTheErrors(){
    const errs = getErrors()
    if (errs){
    setErrors(errs);
    }
  }

  return (
    <div className='row'>
      <div className='col'>
        <Link to='/'> Home </Link>
        {
          type === 'new' ? <p> Add a new author: </p> : <p> Edit this author </p>
        }
        <form onSubmit={onSubmitHandler} className='form-group'>
          <label> Name </label>
          <input type="text" className="form-control" 
          name='name'
          value={name}
          onChange = { e => setName(e.target.value) } />
          <p className='text-danger'> {getErrors() ? getErrors().name ? getErrors().name.message : '' : ''} </p>
          <button onClick = { () => navigate('/')} className="btn btn-primary mt-3 mr-3">Cancel</button>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default AuthorForm;
