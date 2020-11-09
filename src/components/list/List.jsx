import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getName,
  getAddress,
  getLength,
  getElevation,
  getNote,
} from '../../selectors/Selectors';
import {
  setNameInput,
  setAddress,
  setLength,
  setElevation,
  setNote,
} from '../../actions/actions';
import PropTypes from 'prop-types';

const List = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const address = useSelector(state => state.address);
  const length = useSelector(state => state.length);
  const elevation = useSelector(state => state.elevation);
  const note = useSelector(state => state.note);

  const handleNameChange = e => {
    console.log(e.target.value);
    dispatch(setNameInput(e.target.value));
  };

  return (
    <>
      <form>
        <h3>Add Hike</h3>
        <label>
          <h6>Name</h6>
          <input target="name" value={name} onChange={handleNameChange}></input>
        </label>
        <label>
          <h6>Address</h6>
          <input target="address" value={address}></input>
        </label>
        <label>
          <h6>Length</h6>
          <input target="length" value={length}></input>
        </label>
        <label>
          <h6>Elevation</h6>
          <input target="elevation" value={elevation}></input>
        </label>
        <label>
          <h6>Note</h6>
          <input target="note" value={note}></input>
        </label>
        <button>Submit</button>
      </form>
      <ul>
        <h3>Hike List</h3>
      </ul>
    </>
  );
};

List.propTypes = {
  //localList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
