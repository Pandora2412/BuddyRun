import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useCallback, useRef } from 'react';
import { Foundation } from '@expo/vector-icons';
import { Accelerometer } from 'expo-sensors';

const Jogging = () => {
  
  const [{x,y,z}, setData] = useState({x: 0, y: 0, z: 0});
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0)

  const timeid = useRef(null);

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setData)
    );
    Accelerometer.setUpdateInterval(1000);
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const handlePlayPauseButton = useCallback(() => {
    if (!play) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      timeid.current = interval;
      _subscribe();
    } 
    else {
      clearInterval(timeid.current);
      _unsubscribe();
    }
    setPlay(prev => !prev);
  }, [play])

  const handleStopButton = useCallback(() => {
    setTime(0);
    setPlay(false);
    clearInterval(timeid.current);
    _unsubscribe();
    setData({x: 0, y: 0, z: 0});
  }, [play, time])

  return (
    <View style={{width: '100%', height: 450, borderRadius: 20, marginBottom: 15}}>
      <ImageBackground source={require('../assets/image/Map.png')} resizeMode="stretch" style={{borderRadius: 20, width: '100%', height: 450, paddingBottom: 25, justifyContent: 'flex-end'}}>
        <View style={{width: '90%', height: 150, borderRadius: 20, alignSelf: 'center', paddingVertical: 10, paddingHorizontal: '7%', backgroundColor: 'white', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 12,  fontFamily: 'PoppinsLight', color: 'rgba(51, 51, 51, 0.7)'}}>Running time</Text>
              <Text style={{fontSize: 18,  fontFamily: 'PoppinsMedium', color: '#333333'}}>{((Math.floor(time/3600)) < 10?"0":"") + (Math.floor(time/3600)) + ":"+ ((Math.floor((time%3600)/60)) < 10?"0":"") + (Math.floor((time%3600)/60)) + ":"+ (((time%3600)%60) < 10?"0":"") + ((time%3600)%60)}</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 6}}>
              <TouchableOpacity 
                style={{width: 45, height: 45, backgroundColor: '#4B164C', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}
                onPress={handlePlayPauseButton}
              >
                {play && <Foundation name="pause" size={30} color="white" />}
                {!play && <Foundation name="play" size={30} color="white" />}
              </TouchableOpacity>
              <TouchableOpacity 
                style={{width: 45, height: 45, backgroundColor: '#4B164C', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}
                onPress={handleStopButton}
              >
                <Foundation name="stop" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>x: {Math.round(x*100)/100}</Text>
            <Text>y: {Math.round(y*100)/100}</Text>
            <Text>z: {Math.round(z*100)/100}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Jogging