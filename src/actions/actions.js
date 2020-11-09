import {
  getNameInput,
  getAddressInput,
  getLengthInput,
  getElevationInput,
  getNoteInput,
  getLocalHikeList,
  getLocalHikeDetails,
} from '../selectors/Selectors';
import { getHikes, getHikeDetails } from '../services/hikeApi';

export const SET_NAME_INPUT = 'SET_NAME_INPUT';
export const setNameInput = name => ({
  type: SET_NAME_INPUT,
  payload: name,
});

export const SET_ADDRESS_INPUT = 'SET_ADDRESS_INPUT';
export const setAddressInput = address => ({
  type: SET_ADDRESS_INPUT,
  payload: address,
});

export const SET_LENGTH_INPUT = 'SET_LENGTH_INPUT';
export const setLengthInput = length => ({
  type: SET_LENGTH_INPUT,
  payload: length,
});

export const SET_ELEVATION_INPUT = 'SET_ELEVATION_INPUT';
export const setElevationInput = elevation => ({
  type: SET_ELEVATION_INPUT,
  payload: elevation,
});

export const SET_NOTE_INPUT = 'SET_NOTE_INPUT';
export const setNoteInput = note => ({
  type: SET_NOTE_INPUT,
  payload: note,
});

export const SET_HIKE_LIST = 'SET_HIKE_LIST';
export const setHikeList = list => ({
  type: SET_HIKE_LIST,
  payload: list,
});

export const SET_HIKE_DETAILS = 'SET_HIKE_DETAILS';
export const setHikeDetails = details => ({
  type: SET_HIKE_DETAILS,
  payload: details,
});

export const fetchHikes = () => dispatch => {
  getHikes()
    .then(hikeList => {
      dispatch(setHikeList(hikeList));
    });
};

export const fetchDetails = (id) => dispatch => {
  getHikeDetails(id)
    .then(hikeDetails => {
      dispatch(setHikeDetails(hikeDetails));
    });
};
