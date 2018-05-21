import React from 'react';
import { View } from 'react-native';
//faciltating communicatin between react & redux. 2 seperate
//libs work together nicely.
import { Provider } from 'react-redux';//only one child
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common/Header';
import LibraryList from './components/LibraryList';
//<View style={{ flex: 1 }}> { :jsx {:jscript obj
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack4!" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
