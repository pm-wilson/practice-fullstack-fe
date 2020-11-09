import reducer from './Reducer';
import { 
  setNameInput,
  setAddressInput,
  setLengthInput,
  setElevationInput,
  setNoteInput,
} from '../actions/actions';

describe('hike reducer', () => {
  it('handles the SET_NAME_INPUT action', () => {
    const state = {
      name: '',
      address: '',
      length: '',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    };
    const action = setNameInput('Beacon Rock');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Beacon Rock',
      address: '',
      length: '',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    });
  });

  it('handles the SET_ADDRESS_INPUT action', () => {
    const state = {
      name: 'Beacon Rock',
      address: '',
      length: '',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    };
    const action = setAddressInput('34841 WA-14, Stevenson, WA 98648');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    });
  });

  it('handles the SET_LENGTH_INPUT action', () => {
    const state = {
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    };
    const action = setLengthInput('2');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '2',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    });
  });

  it('handles the SET_ELEVATION_INPUT action', () => {
    const state = {
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '2',
      elevation: '',
      note: '',
      localList: [],
      localDetails: {},
    };
    const action = setElevationInput('500');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '2',
      elevation: '500',
      note: '',
      localList: [],
      localDetails: {},
    });
  });

  it('handles the SET_NOTE_INPUT action', () => {
    const state = {
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '2',
      elevation: '500',
      note: '',
      localList: [],
      localDetails: {},
    };
    const action = setNoteInput('Easy hike with great views');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Beacon Rock',
      address: '34841 WA-14, Stevenson, WA 98648',
      length: '2',
      elevation: '500',
      note: 'Easy hike with great views',
      localList: [],
      localDetails: {},
    });
  });
});
