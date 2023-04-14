import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import Jogging from '../components/Jogging';
import TaskBar from '../components/TaskBar';

const Home = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await AsyncStorage.getItem('user')
        setName(user)
      } catch(e) {
        console.log(e);
      }
    }
    getData();
  }, [])

  const [name, setName] = useState(null);
  const [jog, setJog] = useState(true);

  return (
    <SafeAreaView style={{backgroundColor: '#FDF7FD', height: '100%', width: '100%'}}>
      <View style = {{width: '100%', height: '90%', paddingHorizontal: '6%', paddingTop: '3%'}}>
        <ScrollView>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%'}}> 
            <View style={{width: 60, height: 60, alignItems: 'center'}}>
              <Image 
                  source={require('../assets/image/Avatar.png')}
                  style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 19,  fontFamily: 'PoppinsLight'}}>Hello,   
                <Text style={{color: '#4B164C',  fontFamily: 'PoppinsMedium'}}> {name}</Text>
              </Text>
              <Text style={{color: '#4B164C', fontSize: 14,  fontFamily: 'PoppinsLight'}}>Beginner</Text>
            </View>
          </View>
          <View style={{width: '100%', height: 130, marginTop: 20, borderRadius: 16, backgroundColor: '#F8E7F6', padding: '6%', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontSize: 16,  fontFamily: 'PoppinsMedium', color: '#333333'}}>
                Week goal: <Text style={{color: '#4B164C'}}> 50 km</Text>
              </Text>
              <Entypo name="chevron-thin-right" size={24} color="#333333" />
            </View>
            <View style={{width: '100%', height: 50, justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12,  fontFamily: 'PoppinsMedium', color: '#333333'}}>
                  35 km done
                </Text>
                <Text style={{fontSize: 12,  fontFamily: 'PoppinsLight', color: 'rgba(51, 51, 51, 0.7)'}}>
                  15 km left
                </Text>
              </View>
              <View style={{width: '100%', backgroundColor: 'rgba(51, 51, 51, 0.1)', borderRadius: 10, height: 15}}>
                <View style={{width: '71%', backgroundColor: '#4B164C', height: '100%', borderRadius: 10}}></View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%', height: 50, marginTop: 20, marginBottom:20, borderRadius: 16, backgroundColor: '#F8E7F6', paddingHorizontal: '2%', paddingVertical: 6}}>
            <TouchableOpacity 
              style={{width: '50%', backgroundColor: `${jog?'white':'transparent'}`, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => setJog(true)}
            >
              <Text style={{fontSize: 15,  fontFamily: 'PoppinsMedium', color: '#4B164C'}}>Jogging</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{width: '50%', backgroundColor: `${!jog?'white':'transparent'}`, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => setJog(false)}
            >
              <Text style={{fontSize: 15,  fontFamily: 'PoppinsMedium', color: '#4B164C'}}>Finding Buddy</Text>
            </TouchableOpacity>
          </View>
          {jog && <Jogging />}
          {!jog && <Jogging />}
        </ScrollView>
      </View>
      
      <View style = {{width: '100%', height: '10%', paddingHorizontal: '6%'}}>
        <TaskBar menu/>
      </View>
      
    </SafeAreaView>
  )
}

export default Home