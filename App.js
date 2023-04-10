import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import OnBoard0 from './screens/OnBoard0';
import OnBoard1 from './screens/OnBoard1';
import OnBoard2 from './screens/OnBoard2'; 
import Home from './screens/Home';
import Login from './screens/Login';
import { getData } from './localstoreConfig/LocalStorageConfig';

const Stack = createNativeStackNavigator();

export default function App() {
  const [notFirstTime, setNotFirstTime] = useState('true');
  getData('notFirstTime', setNotFirstTime);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {notFirstTime == null && <Stack.Screen name="OnBoard0" component={OnBoard0} />}
        {notFirstTime == null && <Stack.Screen name="OnBoard1" component={OnBoard1} />}
        {notFirstTime == null && <Stack.Screen name="OnBoard2" component={OnBoard2} />}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
