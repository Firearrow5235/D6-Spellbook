import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Spellbooks from './src/screens/Spellbooks'
import { RouteParams } from './src/types'
import CreateSpellbook from './src/screens/CreateSpellbook'
import Spellbook from './src/screens/Spellbook'
import CreateSpell from './src/screens/CreateSpell'

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
        <Stack.Screen name="Spellbook" component={Spellbook} />
        <Stack.Screen name="Create a spellbook" component={CreateSpellbook} />
        <Stack.Screen name="Create a spell" component={CreateSpell} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
