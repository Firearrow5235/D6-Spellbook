import 'react-native-gesture-handler';
import Calculator from './src/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}