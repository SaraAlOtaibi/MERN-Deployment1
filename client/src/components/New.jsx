
import ProductForm from './AuthorForm';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Router, Link, navigate} from '@reach/router';
import AuthorForm from './AuthorForm';

const New = (props) => {

  const [errors, setErrors] = useState();

  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/new", author)
      .then(res => {
        console.log(res);
        //props.successCallback();
        if(res.data.error) {
          setErrors(res.data.error.errors);
          //console.log(res.data.error.errors.name.message)
        } else {
          //navigate("/");
        }
        return errors;
      }).catch(err => {
        console.error(err);
        //setErrors(err.data.error.errors);
      });
  }

  function getErrors(){
    return errors;
  }

  return (
    <div>
      <AuthorForm
        initialName={''}
        onSubmitProp={createAuthor}
        getErrors={getErrors}
        type={'new'}
      />
    </div>
  );
}

export default New;
