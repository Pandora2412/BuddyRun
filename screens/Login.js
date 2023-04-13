import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons'; 
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const Login = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <SafeAreaView style={{backgroundColor: '#FDF7FD', height: '100%', width: '100%'}}>
            <ScrollView>
                <View style={{paddingLeft: '6%', paddingRight: '6%', paddingTop: '3%', width: '100%'}}>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#4B164C', fontSize: 20, fontFamily: 'PoppinsBold'}}>Login </Text>
                            <Octicons name="person" size={24} color="#4B164C" />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: '#5B5B5B', fontSize: 17,  fontFamily: 'PoppinsMedium'}}>Welcome back!!!</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', height: 300, alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/image/login.png')}
                            style={{width: '100%', height: '100%', resizeMode: 'contain', marginBottom: '3%'}}
                        />
                    </View>
                    <View style={{width: '90%', alignItems: 'center', alignSelf: 'center', marginBottom: 25}}>
                        <Text style={{fontSize: 18, fontFamily: 'PoppinsMedium', textAlign: 'center'}}>
                            Let <Text style={{color: '#4B164C', fontFamily: 'PoppinsBold'}}>BuddyRun </Text>help you enjoy your moment
                        </Text>
                    </View>
                    <View style={{width: '100%', marginBottom: 25}}>
                        <TextInput 
                            onChangeText={(val) => setName(val)}
                            value={name}
                            placeholder="Enter Email"
                            style={{padding: 10, fontSize: 16, fontFamily: 'PoppinsLight', backgroundColor: 'white', height: 55, borderRadius: 10, marginBottom: 10}}
                        />
                        <TextInput 
                            onChangeText={(val) => setPwd(val)}
                            value={pwd}
                            placeholder="Enter Password"
                            secureTextEntry
                            style={{padding: 10, fontSize: 16, fontFamily: 'PoppinsLight', backgroundColor: 'white', height: 55, borderRadius: 10, marginBottom: 5}}
                        />
                        <Text style={{color: 'rgb(153, 153, 153)', fontSize: 13, fontFamily: 'PoppinsLight', textAlign: 'right'}}>Forgot Password?</Text>
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={{alignItems: 'center', borderRadius: 10, backgroundColor: '#4B164C', height: 50, justifyContent: 'center', marginBottom: 20}}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        >
                            <Text style={{color: 'white', fontSize: 19, fontFamily: 'PoppinsBold', textAlign: 'center'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom: 20, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'PoppinsLight', textAlign: 'center', color: 'rgb(153, 153, 153)'}}>Don't have any account yet? </Text>
                        <TouchableOpacity 
                                style={{alignItems: 'center'}}
                                onPress={() => {
                                    
                                }}
                            >
                                <Text style={{fontSize: 14,  fontFamily: 'PoppinsBold', textAlign: 'center', color: '#4B164C'}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login