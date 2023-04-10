import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value)
    } catch (e) {
        console.log(e);
    }
}

const getData = async (name, doSomething) => {
    try {
        const value = await AsyncStorage.getItem(name);
        doSomething(value);
    } catch(e) {
        console.log(e);
    }
}

const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

module.exports = {storeData, getData, clearAsyncStorage}