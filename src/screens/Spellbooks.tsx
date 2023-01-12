import { Button, StyleSheet, View } from 'react-native'
import { containers } from '../styles/containers'
import { RouteParams, Spell, Spellbook } from '../types'
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import SpellbookEntries from '../components/SpellbookEntries'
import { useSpellbooks } from '../hooks/useSpellbooks'

type SpellbooksProps = StackScreenProps<RouteParams, 'Spellbooks'>

const styles = StyleSheet.create({
  entry: {
    width: '100%',
    color: '#000',
  },
})

const Spellbooks: FC<SpellbooksProps> = ({ navigation, route }) => {
  const [spellbooks] = useSpellbooks(route.params.registry)

  const openSpellbook = (spellbook: Spellbook) => () => {
    navigation.navigate('Spellbook', { spellbook: spellbook })
  }

  if (spellbooks === null) {
    return <View></View>
  }

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <SpellbookEntries
          spellbooks={spellbooks}
          openSpellbook={openSpellbook}
        />
        <View style={styles.entry}>
          <Button
            title="New Spellbook"
            onPress={() => {
              navigation.navigate('Create a spellbook')
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Spellbooks
