import './src/config/firebase';

import DrawerNavigation from './src/navigation/Menubar'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import RootNavigation from './src/navigation';
import { store } from './src/redux/store/index';

const App = () => {
  console.log('store', store.getState());

  return (
    // <Provider store={store}>
    //   <RootNavigation />
    // </Provider>
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App;