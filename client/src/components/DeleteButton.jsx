import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
  const { _id, successCallback } = props;

  const deleteProduct = e => {
    axios.delete(`http://localhost:8000/api/delete/${_id}`)
      .then(res => {
        console.log(res);
        successCallback();
      })
  }
  return (
    <button className="btn btn-danger mb-3 ml-3" onClick={deleteProduct}>
      Delete
    </button>
  )
}

export default DeleteButton;
