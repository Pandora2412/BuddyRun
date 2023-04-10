import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons'; 
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

const Login = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <SafeAreaView>
            <View style={{paddingLeft: '6%', paddingRight: '6%', paddingTop: '3%', backgroundColor: '#FDF7FD', width: '100%', height: '100%', justifyContent: 'space-between'}}>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#4B164C', fontSize: 20, fontWeight: 'bold'}}>Login </Text>
                        <Octicons name="person" size={24} color="#4B164C" />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{color: '#5B5B5B', fontSize: 19, fontWeight: 'medium'}}>Welcome back!!!</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 300, alignItems: 'center'}}>
                    <Image 
                        source={require('../assets/image/login.png')}
                        style={{width: '100%', height: '100%', resizeMode: 'contain', marginBottom: '3%'}}
                    />
                </View>
                <View style={{width: '80%', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'medium', textAlign: 'center'}}>Let BuddyRun help you enjoy your moment</Text>
                </View>
                <View style={{width: '100%'}}>
                    <TextInput 
                        onChangeText={(val) => setName(val)}
                        value={name}
                        placeholder="Enter Email"
                        style={{padding: 10, fontSize: 20, fontWeight: 'medium', backgroundColor: 'white', height: 60, borderRadius: 10, marginBottom: 10}}
                    />
                    <TextInput 
                        onChangeText={(val) => setPwd(val)}
                        value={pwd}
                        placeholder="Enter Password"
                        secureTextEntry
                        style={{padding: 10, fontSize: 20, fontWeight: 'medium', backgroundColor: 'white', height: 60, borderRadius: 10}}
                    />
                    <Text style={{color: '#5B5B5B', fontSize: 15, fontWeight: 'light', textAlign: 'right'}}>Forgot Password?</Text>
                </View>
                <View>
                    <TouchableOpacity style={{alignItems: 'center', borderRadius: 10, backgroundColor: '#4B164C', height: 50, justifyContent: 'center', marginBottom: 20}}>
                        <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', textAlign: 'center'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                    
                
            </View>
        </SafeAreaView>
    )
}

export default Login