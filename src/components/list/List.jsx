import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNameInput,
  setAddressInput,
  setLengthInput,
  setElevationInput,
  setNoteInput,
} from '../../actions/actions';
//import PropTypes from 'prop-types';

const List = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const address = useSelector(state => state.address);
  const length = useSelector(state => state.length);
  const elevation = useSelector(state => state.elevation);
  const note = useSelector(state => state.note);

  const handleChange = e => {
    if(e.target.id === 'name') dispatch(setNameInput(e.target.value));
    if(e.target.id === 'address') dispatch(setAddressInput(e.target.value));
    if(e.target.id === 'length') dispatch(setLengthInput(e.target.value));
    if(e.target.id === 'elevation') dispatch(setElevationInput(e.target.value));
    if(e.target.id === 'note') dispatch(setNoteInput(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submit form');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add Hike</h3>
        <label>
          <h6>Name</h6>
          <input id="name" target="name" value={name} onChange={handleChange}></input>
        </label>
        <label>
          <h6>Address</h6>
          <input id="address" target="address" value={address} onChange={handleChange}></input>
        </label>
        <label>
          <h6>Length</h6>
          <input id="length" target="length" value={length} onChange={handleChange}></input>
        </label>
        <label>
          <h6>Elevation</h6>
          <input id="elevation" target="elevation" value={elevation} onChange={handleChange}></input>
        </label>
        <label>
          <h6>Note</h6>
          <input id="note" target="note" value={note} onChange={handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
      <ul>
        <h3>Hike List</h3>
      </ul>
    </>
  );
};

// List.propTypes = {
//   localList: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default List;
