import 'react-native-gesture-handler'
import Calculator from './src/screens/Calculator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Spellbooks from './src/screens/Spellbooks'
import { RouteParams } from './types'
import SpellbookForm from './src/screens/SpellbookForm'

const Stack = createStackNavigator<RouteParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spellbooks">
        <Stack.Screen
          name="Spellbooks"
          component={Spellbooks}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Create a Spellbook" component={SpellbookForm} />
        <Stack.Screen name="Spell Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
