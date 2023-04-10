import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import Onboard from '../components/OnBoard'

const OnBoard0 = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: '#FDF7FD', height: '100%', width: '100%'}}>
            <Onboard 
                id={0} 
                count={3} 
                navigation={navigation} 
                title="Rise Up Now"
                content="Explore the hidden runner inside you."
            />
        </SafeAreaView>
    )
}

export default OnBoard0