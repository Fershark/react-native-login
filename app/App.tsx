import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import configureStore from './redux';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const {store, persistor} = configureStore();

const Stack = createStackNavigator();

const Navigation = () => {
  const {auth} = useSelector((state) => state.auth);
  return (
    <Stack.Navigator>
      {auth === null ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Log in'}}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
