import {
  SET_NAME,
  SET_NAME_INPUT,
  SET_ADDRESS,
  SET_ADDRESS_INPUT,
  SET_LENGTH,
  SET_LENGTH_INPUT,
  SET_ELEVATION,
  SET_ELEVATION_INPUT,
  SET_NOTE,
  SET_NOTE_INPUT,
} from '../actions/actions';

const initialState = {
  name: '',
  address: '',
  length: '',
  elevation: '',
  note: '',
  localList: [],
  localdetails: {},
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_NAME:
      return { ...state, name: state.nameInput };
    case SET_NAME_INPUT:
      return { ...state, nameInput: action.payload };
    case SET_ADDRESS:
      return { ...state, address: state.addressInput };
    case SET_ADDRESS_INPUT:
      return { ...state, addressInput: action.payload };
    case SET_LENGTH:
      return { ...state, length: state.lengthInput };
    case SET_LENGTH_INPUT:
      return { ...state, lengthInput: action.payload };
    case SET_ELEVATION:
      return { ...state, elevation: state.elevationInput };
    case SET_ELEVATION_INPUT:
      return { ...state, elevationInput: action.payload };
    case SET_NOTE:
      return { ...state, note: state.noteInput };
    case SET_NOTE_INPUT:
      return { ...state, noteInput: action.payload };
    default: return state;
  }
}
