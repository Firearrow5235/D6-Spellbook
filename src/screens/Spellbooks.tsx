import { Button, StyleSheet, View } from 'react-native'
import { containers } from '../styles/containers'
import { RouteParams } from '../../types'
import { FC, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import SpellbookEntries from '../components/SpellbookEntries'

type SpellbooksProps = StackScreenProps<RouteParams, 'Spellbooks'>

const styles = StyleSheet.create({
  entry: {
    width: '100%',
    color: '#000',
  },
})

const Spellbooks: FC<SpellbooksProps> = ({ navigation }) => {
  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <SpellbookEntries />
        <View style={styles.entry}>
          <Button
            title="New Spellbook"
            onPress={() => {
              navigation.navigate('Create a Spellbook')
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Spellbooks
