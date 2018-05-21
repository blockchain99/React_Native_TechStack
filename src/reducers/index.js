import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // libraries: () => []
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

//console.log(store.getState());  //stage 1
//will show { libraries: [] } - library with empty array

//console.log(store.getState());  //stage 2
//will show
//{ libraries: [{ id: 1, title: 'webpack', description ....}  ]
