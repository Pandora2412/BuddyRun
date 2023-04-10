import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import Onboard from '../components/OnBoard'

const OnBoard2 = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: '#FDF7FD', height: '100%', width: '100%'}}>
            <Onboard 
                id={2} 
                count={3} 
                navigation={navigation} 
                title="Healthy"
                content="Run More, Eat Good, and Repeat to be Healthy"
            />
        </SafeAreaView>
    )
}

export default OnBoard2