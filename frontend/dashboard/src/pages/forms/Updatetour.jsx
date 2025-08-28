import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useUpdateToursMutation } from '../../stores/api';

const Updatetour = () => {
  const [updateTour] = useUpdateToursMutation();
  const [currentTitle, setCurrentTitle] = useState('');
  const [updateTourData, setUpdateTourData] = useState({
    currentPlace: '',
    currentPoint: '',
    newPlace: '',
    newPoint: '',
    newTitle: '',
    startingPlace: '',
    endingPlace: '',
    startingDate: null,
    endingDate: null,
    estimatedKm: '',
    tourPrice: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateTourData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartDateChange = (date) => {
    setUpdateTourData((prev) => ({ ...prev, startingDate: date }));
  };

  const handleEndDateChange = (date) => {
    setUpdateTourData((prev) => ({ ...prev, endingDate: date }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateTour({
        currentPlace: updateTourData.currentPlace,
        currentPoint: updateTourData.currentPoint,
        newPlace: updateTourData.newPlace,
        newPoint: updateTourData.newPoint,
        currentTitle: currentTitle,
        newTitle: updateTourData.newTitle,
        startingPlace: updateTourData.startingPlace,
        endingPlace: updateTourData.endingPlace,
        startingDate: updateTourData.startingDate,
        endingDate: updateTourData.endingDate,
        estimatedKm: updateTourData.estimatedKm,
        tourPrice: updateTourData.tourPrice,
      }).unwrap();

      if (response?.success) {
        alert('Tour updated successfully!');
      } else {
        alert('Sorry, the update was not successful.');
      }
      setCurrentTitle('');
      setUpdateTourData({
        currentPlace: '',
        currentPoint: '',
        newPlace: '',
        newPoint: '',
        newTitle: '',
        startingPlace: '',
        endingPlace: '',
        startingDate: null,
        endingDate: null,
        estimatedKm: '',
        tourPrice: ''
      });

    } catch (error) {
      alert('Failed to update the tour.');
      console.error(error);
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h2>Update Tour</h2>
      </div><br /><br />

      <form onSubmit={handleUpdateSubmit} className="mb-3">

        <input type="text" className="form-control" placeholder="Current title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} required /><br />

        <input type="text" className="form-control" placeholder="New tour title" name="newTitle" value={updateTourData.newTitle} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" name="currentPlace" placeholder="Current place" value={updateTourData.currentPlace} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" name="newPlace" placeholder="New place" value={updateTourData.newPlace} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" name="currentPoint" placeholder="Current point" value={updateTourData.currentPoint} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" name="newPoint" placeholder="New point" value={updateTourData.newPoint} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" placeholder="Starting place" name="startingPlace" value={updateTourData.startingPlace} onChange={handleInputChange} required /><br />

        <input type="text" className="form-control" placeholder="Ending place" name="endingPlace" value={updateTourData.endingPlace} onChange={handleInputChange} required /><br />

        <DatePicker selected={updateTourData.startingDate} className="form-control" required onChange={handleStartDateChange} minDate={new Date()} placeholderText="Select starting date" /><br /><br />

        <DatePicker selected={updateTourData.endingDate} onChange={handleEndDateChange} minDate={updateTourData.startingDate || new Date()} placeholderText="Select ending date" className="form-control" required /><br /><br />

        <input type="number" className="form-control" placeholder="Estimated KM" name="estimatedKm" value={updateTourData.estimatedKm} onChange={handleInputChange} required /><br />

        <input type="number" className="form-control" placeholder="Tour price per person" name="tourPrice" value={updateTourData.tourPrice} onChange={handleInputChange} required /><br />

        <button className="btn btn-primary" type="submit">Update Tour</button>
      </form>
    </div>
  );
};

export default Updatetour;
