import React, { useState } from 'react'
import { useDeleteToursMutation } from '../../stores/api';


const Deletetour = () => {

  const [deleteTours] = useDeleteToursMutation();
  const [deletetitle, setDeletetitle] = useState('');

  const deletetouroftours = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteTours({ deletetitle }).unwrap();
      if (response?.success) {
        alert("delete succesfully")
        setDeletetitle('');
      }
      else {
        alert("tour not found");
      }
    }
    catch (error) {
      alert("error generate delete time")
      console.error(error)
    }
  }

  const handleInputchange = (e) => {
    setDeletetitle(e.target.value);
  }


  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h2>Add Tour</h2>
      </div><br /><br />
      <div className="mb-3">
        <form action="" onSubmit={deletetouroftours}>

          <input type="text" className="form-control" value={deletetitle} onChange={handleInputchange} placeholder="delete tour name" required></input><br />

          <button className='btn bg-danger' type='submit'>delete</button>
        </form>
      </div>
    </div>
  )
}

export default Deletetour
