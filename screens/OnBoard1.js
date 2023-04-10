import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import Onboard from '../components/OnBoard'

const OnBoard1 = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: '#FDF7FD', height: '100%', width: '100%'}}>
            <Onboard 
                id={1} 
                count={3} 
                navigation={navigation} 
                title="Finding your Buddy"
                content="Running can take you to your true Love."
            />
        </SafeAreaView>
    )
}

export default OnBoard1