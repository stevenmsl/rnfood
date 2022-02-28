import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/navigation/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Business Search'}}
        />
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
