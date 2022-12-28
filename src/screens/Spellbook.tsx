import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { RouteParams } from '../../types'
import { containers } from '../styles/containers'

type SpellbookProps = StackScreenProps<RouteParams, 'Spellbook'>

const Spellbook: FC<SpellbookProps> = ({ route }) => {
  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <Text>{route.params.spellbook.name}</Text>
      </View>
    </View>
  )
}

export default Spellbook
