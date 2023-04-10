import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import React from 'react'
import LottieView from 'lottie-react-native'

const OnBoard = (props) => {
    const boardPage = [...Array(props.count).keys()]

    return (
        <View style={{paddingTop: '20%', paddingBottom: '20%', backgroundColor: '#FDF7FD', justifyContent: 'space-between', width: '100%', height: '100%'}}>
            <View style={{width: '100%', height: '50%', alignItems: 'center'}}>
                <LottieView
                    style={{ width: '100%' }}
                    autoPlay
                    loop
                    source = {props.id == 0?require('../assets/48646-girl-running.json'):props.id == 1?require('../assets/75531-friends.json'):require('../assets/104389-back-excercise.json')}
                />
            </View>
            <View style={{paddingLeft: '10%', width: '70%', height: '20%', justifyContent: 'center'}}>
                <Text style={{color: '#4B164C', fontSize: 27, fontWeight: 'bold'}}>{props.title}</Text>
            </View>
            <View style={{paddingLeft: '10%', width: '70%', height: '20%'}}>
                <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>{props.content}</Text>
            </View>
            <View style={{paddingLeft: '10%', paddingRight: '10%', gap: 6}}>
                <View style={{flexDirection: 'row', gap: 20}}>
                    {boardPage.map((page, index) => 
                        <TouchableOpacity key={index} onPress={() => props.navigation.navigate('OnBoard'+ page)}>
                            <Octicons name="dot-fill" size={30} color={page == props.id?"#4B164C":"#D9D9D9"} />
                        </TouchableOpacity>   
                    )}
                </View>
                <View style={{flexDirection: 'row', justifyContent: `${props.id!=props.count-1?"space-between":"flex-end"}`}}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Text style={{color: '#4B164C', fontSize: 20}}>{props.id!=props.count-1?"Skip":"Let's get started!"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate(props.id<props.count-1?'OnBoard'+(props.id+1):'Home')}>
                        {props.id!=props.count-1&&<AntDesign name="rightcircleo" size={40} color="#4B164C" />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default OnBoard