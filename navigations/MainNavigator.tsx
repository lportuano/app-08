import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CamaraScreen from '../screens/CamaraScreen';
import GaleriaScreen from '../screens/GaleriaScreen';
import { NavigationContainer } from '@react-navigation/native';

import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontsScreen from '../screens/FontsScreen';
import MapaScreen from '../screens/MapaScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Camara" component={CamaraScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Entypo name="camera" size={24} color="black" />
                }}
            />
            <Tab.Screen name="Galeria" component={GaleriaScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name="view-gallery" size={24} color="black" />
                }}
            />
            <Tab.Screen name="Fonts" component={FontsScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name="view-gallery" size={24} color="black" />
                }}
            />
            <Tab.Screen name="Mapa" component={MapaScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name="view-gallery" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    );
}

export function MainNav() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}