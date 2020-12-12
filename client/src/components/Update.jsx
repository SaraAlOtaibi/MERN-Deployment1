
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Router, Link, navigate} from '@reach/router';
import AuthorForm from './AuthorForm';

const Update = (props) => {

  const { id } = props;
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/${props._id}`)
    .then(res => {
        setAuthor(res.data);
        console.log(res.data);
        setLoaded(true);
        if(!res.data.name){
          setNotFound(true);
          console.log('hiiiiiiiiiii')
        }
    }).catch(err => {
      setNotFound(true);
    })
  }, [])
  /* useEffect(() => {
    console.log(props._id);
    getOne();
  }, [props._id]);
  
  function getOne() {
    axios.get(`http://localhost:8000/api/products/${props._id}`)
      .then(res => {
        console.log('in view: ' + res);
        setProduct(res.data);
        setLoaded(true);
      }).catch(err => console.error(err));
  } */

  const updateAuthor = author => {
    axios.put(`http://localhost:8000/api/edit/${props._id}`, author)
      .then(res => {
        console.log(res);
        //props.successCallback();
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      }).catch(err => {
        console.error(err);
        
      });
      //navigate('/');
  }

  
  function getErrors(){
    return errors;
  }
    return (
        <div>
          { notFound ? 
          <div> 
            <p>We're sorry, but we could not find the author you are looking for. 
              Would you like to add this author to our database?
            </p>
              <Link to='/api/new'> Add </Link>
              </div> :
                loaded && <AuthorForm 
                initialName={author.name}
                onSubmitProp={updateAuthor}
                getErrors={getErrors}
                type={'new'}
                />
                
              }

        </div>
    );
}

export default Update;



