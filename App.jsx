import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/home';
import ItemDetail from './src/pages/itemDetail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' headerMode='none'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}