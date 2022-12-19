import 'react-native-gesture-handler';
import Calculator from './src/screens/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Spellbooks from './src/screens/Spellbooks';
import { RouteParams } from './types';

const Stack = createStackNavigator<RouteParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Spellbooks" component={Spellbooks} options={{headerShown: false}}/>
        <Stack.Screen name="Spell Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}