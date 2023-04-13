import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import OnBoard0 from './screens/OnBoard0';
import OnBoard1 from './screens/OnBoard1';
import OnBoard2 from './screens/OnBoard2'; 
import Home from './screens/Home';
import Login from './screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [firstTime, setFirstTime] = useState(null);
  
  const [loaded] = useFonts({
      Poppins: require('./assets/Poppins/Poppins-Black.ttf'),
      PoppinsBold: require('./assets/Poppins/Poppins-Bold.ttf'),
      PoppinsMedium: require('./assets/Poppins/Poppins-Medium.ttf'),
      PoppinsLight: require('./assets/Poppins/Poppins-Light.ttf')
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const firstLaunch = await AsyncStorage.getItem('a')
        if (firstLaunch == null) {
          const storeData = async () => {
            try {
              await AsyncStorage.setItem('firstTime', "1")
            } catch (e) {
              console.log(e);
            }
          }
          storeData();
          setFirstTime(true);
        }
        else setFirstTime(false);
      } catch(e) {
        console.log(e);
      }
    }
    getData();
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    firstTime != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {firstTime && <Stack.Screen name="OnBoard0" component={OnBoard0} />}
          {firstTime && <Stack.Screen name="OnBoard1" component={OnBoard1} />}
          {firstTime && <Stack.Screen name="OnBoard2" component={OnBoard2} />}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
