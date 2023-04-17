import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function GPS() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location != null &&
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.005,
        }}  
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          setLocation(e.nativeEvent.coordinate);
        }}
      >
        {/*<Marker coordinate={{latitude:location.coords.latitude, longitude:location.coords.longitude}}></Marker>*/}
      </MapView>}
      {location && <Text>Speed: {Math.round(location.speed)} m/s</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
});