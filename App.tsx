import { SignupScreen, Todo } from './src/screens/index';
import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/redux/store/index';

const App = () => {
  console.log('store',store.getState());
  
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App;