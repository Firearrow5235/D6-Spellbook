import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Spellbooks from './src/screens/Spellbooks'
import { RouteParams } from './src/types'
import CreateSpellbook from './src/screens/CreateSpellbook'
import Spellbook from './src/screens/Spellbook'
import CreateSpell from './src/screens/CreateSpell'
import EditSpellbook from './src/screens/EditSpellbook'
import { useRegistry } from './src/hooks/useRegistry'
import { View } from 'react-native'

const Stack = createStackNavigator<RouteParams>()

export default function App() {
  const [registry] = useRegistry()

  if (registry === null) {
    return <View></View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spellbooks">
        <Stack.Screen
          name="Spellbooks"
          component={Spellbooks}
          options={{ headerShown: false }}
          initialParams={{ registry }}
        />
        <Stack.Screen name="Spellbook" component={Spellbook} />
        <Stack.Screen name="Create a spellbook" component={CreateSpellbook} />
        <Stack.Screen name="Edit spellbook" component={EditSpellbook} />
        <Stack.Screen name="Create a spell" component={CreateSpell} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
