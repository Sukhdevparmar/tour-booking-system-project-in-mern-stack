import React, { useState } from 'react';
import { useAddToursMutation } from '../../stores/api';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Addtour = () => {
  const [alltours, setNewTours] = useState({
    title: '',
    statingplace: '',
    endingplace: '',
    startingdate: null,
    endingdate: null,
    addkm: '',
    addprice: ''
  });
  const [file, setFile] = useState();
  const [forms, setForms] = useState([{ place: '' }]);
  const [formstwo, setFormstwo] = useState([{ point: '' }]);
  const [tours] = useAddToursMutation();



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTours(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, fieldName) => {
    setNewTours(prev => ({ ...prev, [fieldName]: date }));
  };

  const handleFormChange = (index, e, formType) => {
    const { name, value } = e.target;
    const updated = formType === 'place' ? [...forms] : [...formstwo];
    updated[index][name] = value;

    formType === 'place' ? setForms(updated) : setFormstwo(updated);
  };

  const addplace = (e) => {
    e.preventDefault();
    setForms([...forms, { place: '' }]);
  };

  const stoppoint = (e) => {
    e.preventDefault();
    setFormstwo([...formstwo, { point: '' }]);
  };
  const addTour = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', alltours.title);
    formData.append('image', file);
    formData.append('startingplace', alltours.statingplace);
    formData.append('endingplace', alltours.endingplace);
    formData.append('startingdate', alltours.startingdate?.toISOString());
    formData.append('endingdate', alltours.endingdate?.toISOString());
    formData.append('km', alltours.addkm);
    formData.append('price', alltours.addprice);
    formData.append('places', JSON.stringify(forms.map(p => ({ place: p.place }))));
    formData.append('nightpoints', JSON.stringify(formstwo.map(p => ({ point: p.point }))));



    try {
      await tours(formData);
      alert('Tour added successfully');

      setForms([{ place: '' }]);
      setFormstwo([{ point: '' }]);
      setNewTours({
        title: '',
        statingplace: '',
        endingplace: '',
        startingdate: null,
        endingdate: null,
        addkm: '',
        addprice: ''
      });
      setFile(null);
    } catch (error) {
      alert("Failed to add tour.");
      console.error(error);
    }
  };
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h2>Add Tour</h2>
      </div><br /><br />

      <div className="mb-3">
        <form onSubmit={addTour} encType="multipart/form-data">
          <input type="text" className="form-control" placeholder="Add tour name" name="title" value={alltours.title} onChange={handleInputChange} required /><br />
          <label name="thumblaind">select best thumblaind for tour: &nbsp;</label>
          <input type="file" onChange={e => setFile(e.target.files[0])} />

          {forms.map((item, index) => (
            <div key={index} className="form-block mb-3">
              <input type="text" name="place" className='form-control' value={item.place} onChange={(e) => handleFormChange(index, e, 'place')} placeholder="Add place" required />
            </div>
          ))}
          <button className='btn btn-secondary' onClick={addplace}>Add Place</button><br /><br />

          {formstwo.map((item, index) => (
            <div key={index} className="form-block mb-3">
              <input type="text" name="point" className='form-control' value={item.point} onChange={(e) => handleFormChange(index, e, 'point')} placeholder="Add stop point" required />
            </div>
          ))}
          <button className='btn btn-secondary' onClick={stoppoint}>Add Stop Point</button><br /><br />

          <DatePicker
            selected={alltours.startingdate}
            onChange={date => handleDateChange(date, 'startingdate')}
            minDate={new Date()}
            placeholderText="Select starting date "
            className="form-control"
            required
          /><br /><br />

          <DatePicker
            selected={alltours.endingdate}
            onChange={date => handleDateChange(date, 'endingdate')}
            minDate={alltours.startingdate}
            placeholderText="Select ending date"
            className="form-control"
            required
          /><br /><br />

          <input type="text" className="form-control" placeholder="Starting place" name="statingplace" value={alltours.statingplace} onChange={handleInputChange} required /><br />

          <input type="text" className="form-control" placeholder="Ending place" name="endingplace" value={alltours.endingplace} onChange={handleInputChange} required /><br />

          <input type="number" className="form-control" placeholder="KM of tour estimated" name="addkm" value={alltours.addkm} onChange={handleInputChange} required /><br />

          <input type="number" className="form-control" placeholder="Tour price per person" name="addprice" value={alltours.addprice} onChange={handleInputChange} required /><br />

          <button className='btn btn-primary' type="submit">Add Tour</button>
        </form>
      </div>
    </div>
  );
};

export default Addtour;
