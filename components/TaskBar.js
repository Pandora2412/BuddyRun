import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NavBar(props) {
  const navigation = useNavigation();

  const icons = [
    <MaterialCommunityIcons name="menu" size={30} color={`${props.menu?"#4B164C":"rgba(0, 0, 0, 0.2)"}`} />,
    <MaterialCommunityIcons name="handshake-outline" size={30} color={`${props.buddy?"#4B164C":"rgba(0, 0, 0, 0.2)"}`} />,
    <MaterialCommunityIcons name="medal-outline" size={30} color={`${props.achive?"#4B164C":"rgba(0, 0, 0, 0.2)"}`} />,
    <MaterialCommunityIcons name="email-outline" size={30} color={`${props.mail?"#4B164C":"rgba(0, 0, 0, 0.2)"}`} />, 
    <MaterialCommunityIcons name="account" size={30} color={`${props.account?"#4B164C":"rgba(0, 0, 0, 0.2)"}`} />,
  ] 

  return (
    <View style={{flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        {icons.map((icon, index) => (
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                key={index}
                style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}
            >
                {icon}
          </TouchableOpacity>
        ))}
    </View>
  );
}