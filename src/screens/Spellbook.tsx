import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Text, View, Button } from 'react-native'
import { RouteParams } from '../../types'
import { containers } from '../styles/containers'

type SpellbookProps = StackScreenProps<RouteParams, 'Spellbook'>

const Spellbook: FC<SpellbookProps> = ({ route, navigation }) => {
  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <Text style={{ marginBottom: '4px' }}>
          {route.params.spellbook.name}
        </Text>
        <View style={{ width: '100%' }}>
          <Button
            title="New Spell"
            onPress={() => {
              navigation.navigate('Create a spell')
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Spellbook
