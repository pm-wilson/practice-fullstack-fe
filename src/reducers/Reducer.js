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
  localDetails: {},
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_NAME:
      return { ...state, name: state.name };
    case SET_NAME_INPUT:
      return { ...state, name: action.payload };
    case SET_ADDRESS:
      return { ...state, address: state.addressInput };
    case SET_ADDRESS_INPUT:
      return { ...state, address: action.payload };
    case SET_LENGTH:
      return { ...state, length: state.lengthInput };
    case SET_LENGTH_INPUT:
      return { ...state, length: action.payload };
    case SET_ELEVATION:
      return { ...state, elevation: state.elevationInput };
    case SET_ELEVATION_INPUT:
      return { ...state, elevation: action.payload };
    case SET_NOTE:
      return { ...state, note: state.note };
    case SET_NOTE_INPUT:
      return { ...state, note: action.payload };
    default: return state;
  }
}
