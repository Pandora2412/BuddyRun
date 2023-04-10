import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard0 from './screens/OnBoard0';
import OnBoard1 from './screens/OnBoard1';
import OnBoard2 from './screens/OnBoard2'; 
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoard0" component={OnBoard0} />
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
        <Stack.Screen name="OnBoard2" component={OnBoard2} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
